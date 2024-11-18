# **Secure File Sharing System** 🚀

## **Overview** 
Welcome to the **Secure File Sharing System** project! This system allows **Ops Users** to upload files, and **Client Users** to download files through a secure, encrypted URL. The system ensures that only authorized users have access to sensitive files, and uses email verification for user registration.

The system consists of **REST APIs** that provide functionalities for **file uploads**, **user sign-up and login**, **email verification**, **file download with encrypted URLs**, and more.

---

## **Features** ✨

### **Ops User** 🛠️
- **Login**: Ops users can log in using their credentials.
- **Upload Files**: Ops users can upload files of type `.pptx`, `.docx`, and `.xlsx`.

### **Client User** 👤
- **Sign Up**: New users can sign up and receive an encrypted URL for activation.
- **Email Verification**: After signing up, an email verification link is sent.
- **Login**: Client users can log in using their credentials.
- **Download File**: Client users can download files through a secure, encrypted URL.
- **List Files**: Client users can view all available files.

---

## **Technologies Used** 💻
- **Backend Framework**: Nodejs, expressjs
- **Database**: NoSQL Database (MongoDBAtlas)
- **Authentication**: JWT (JSON Web Tokens) for secure authentication
- **File Upload**: Multer (for Node.js) 
- **Encryption**: Secure URL generation using encryption techniques.
- **Others**: dotenv for environment variables.

---

## **Installation** ⚙️

### 1. **Clone the Repository** 🖥️
Clone this repository to your local machine:
```bash
git clone https://github.com/yourusername/secure-file-sharing.git
cd secure-file-sharing

