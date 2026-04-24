require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const app = express();
app.use(cors()); // Critical for frontend-backend communication

const s3 = new S3Client({ 
  region: process.env.AWS_REGION,
  // The SDK automatically uses AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY from .env
});

const generateFileName = (originalName) => {
  const ext = path.extname(originalName);
  return `${crypto.randomBytes(16).toString('hex')}${ext}`;
};

app.get('/generate-upload-url', async (req, res) => {
  try {
    const { fileName, fileType } = req.query;

    if (!fileName || !fileType) {
      return res.status(400).json({ error: 'fileName and fileType are required' });
    }

    const uniqueFileName = generateFileName(fileName);

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: uniqueFileName,
      ContentType: fileType, // Must match the PUT request exactly
    });

    // Generate URL (valid for 60 seconds)
    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 60 });

    res.json({
      uploadUrl,
      publicUrl: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${uniqueFileName}`
    });
  } catch (err) {
    console.error('S3 Sign Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
