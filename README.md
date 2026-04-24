# 📸 Image Upload to Amazon S3 Project 📸
The Image Upload to Amazon S3 project is a web application designed to upload images directly to Amazon S3 using presigned URLs. This project provides a simple and efficient way to upload images to S3, leveraging the power of AWS services. The application consists of a client-side component, built with HTML, CSS, and JavaScript, and a server-side component, built with Node.js and Express.js. The project utilizes the AWS SDK to interact with S3 and generate presigned URLs for secure and efficient uploads.

## 🚀 Key Features
- **Image Upload**: Upload images directly to Amazon S3 using presigned URLs.
- **Presigned URL Generation**: Generate presigned URLs for uploading objects to S3.
- **Cross-Origin Resource Sharing**: Enable cross-origin resource sharing using CORS middleware.
- **Environment Variable Management**: Manage environment variables using dotenv.
- **Error Handling**: Handle errors and return appropriate responses to the client.

## 🛠️ Tech Stack
- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **Backend**:
  - Node.js
  - Express.js
- **Object Storage**:
  - Amazon S3
- **AI Tools**:
  - None
- **Build Tools**:
  - None
- **Dependencies**:
  - @aws-sdk/client-s3
  - @aws-sdk/s3-request-presigner
  - cors
  - dotenv
  - express
  - http-server

## 📦 Installation
To install the project dependencies, run the following command:
```bash
npm install
```
This will install all the required dependencies specified in the `package.json` file.

## Setup
Create the `.env` file and copy the `.env.example` template to `.env` file and replace the values with the actual values

## 💻 Usage
To start the server, run the following command:
```bash
npm start
```
This will start the Express server for handling upload image process.

To start the frontend, run the following command:
```bash
npm serve
```
This will start the HTTP server for frontend, and you can access the application by navigating to `http://localhost:8080` in your web browser.

## 📂 Project Structure
```markdown
.
├── index.html
├── server.js
├── package.json
├── .env.example
└── node_modules
```

## 🤝 Contributing
To contribute to this project, please fork the repository and submit a pull request with your changes. Ensure that your code is well-structured, readable, and follows the existing coding standards.

## 📝 License
This project is licensed under the MIT License. See the `LICENSE` file for more information.

## 📬 Contact
For any questions or concerns, please contact us at [firmansyahwicaksono30@gmail.com](mailto:firmansyahwicaksono30@gmail.com).

## 💖 Thanks Message
I would like to thank all the contributors and maintainers of the AWS SDK and other dependencies used in this project. Your hard work and dedication have made it possible for us to build this application.
