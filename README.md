# **Secure File Sharing System** 🚀

## **Overview** 🧐
Welcome to the **Secure File Sharing System** project! This system enables secure upload, download, and management of files for authorized users. It implements **JWT-based authentication**, file encryption, and role-based access control to ensure **secure file management**.

---

## **Features** ✨
- **User Authentication**: Sign up, login, and email verification.
- **Role-Based Access Control**: Only Ops users can upload files, and only Client users can access the download links.
- **File Upload**: Upload `.pptx`, `.docx`, and `.xlsx` files.
- **Secure Download**: Generate encrypted download links for files.
- **File Listing**: List all files uploaded by authorized users.

---

## **Technologies Used** 💻
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Encryption**: crypto
- **Email Service**: Nodemailer for email verification
- **Other**: dotenv for environment variables

---

## **Installation** ⚙️

### 1. **Clone the Repository** 🖥️
Clone this repository to your local machine using:
```bash
git clone https://github.com/yourusername/secure-file-sharing.git
cd secure-file-sharing
