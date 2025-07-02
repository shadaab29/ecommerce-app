# 🛒 Full Stack E-commerce Application

This is a full-featured, production-ready e-commerce web application built using:

- 🔥 **Frontend**: Angular
- 🧠 **Backend**: Node.js (Express)
- 📦 **Database**: MongoDB
- 🐳 **Containerized with**: Docker & Docker Compose
- 🚀 **CI/CD Pipeline**: GitHub Actions with automated deployment to AWS EC2

---

## 🧱 Architecture

Frontend (Angular)
↓ REST API
Backend (Node.js + Express)
↓ Mongoose ODM
Database (MongoDB)

yaml
Copy
Edit

---

## 📁 Project Structure

ecommerce-app/
├── frontend/ # Angular application
├── backend/ # Node.js REST API
├── .github/workflows/ # GitHub Actions CI/CD workflow
├── scripts/ # EC2 setup script
├── docker-compose.yml # Multi-container Docker configuration
└── README.md

yaml
Copy
Edit

---

## 🧪 Features

- View Product List (Angular)
- Add Product Form
- RESTful API endpoints (`GET`, `POST`, `PUT`, `DELETE`)
- MongoDB data storage
- GitHub Actions workflow to deploy to EC2
- EC2 deployment with Docker Compose

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
2. Run Locally with Docker
Make sure you have Docker installed.

bash
Copy
Edit
docker-compose up --build
Angular app: http://localhost:4200

Backend API: http://localhost:5000/api/products

MongoDB: localhost:27017 (internal container)

☁️ Automated Deployment on AWS EC2
Prerequisites
Ubuntu EC2 instance

Open ports: 22, 80, 5000, 27017

Docker and Docker Compose installed

GitHub Secrets configured:

Secret Name	Description
EC2_HOST	EC2 public IP address
EC2_USER	SSH user (usually ubuntu)
EC2_SSH_KEY	Your .pem private key contents

How It Works
Every push to the main branch:

Triggers GitHub Actions workflow

SSHes into EC2

Copies project files

Runs docker-compose up -d --build to deploy

📂 API Endpoints
GET /api/products – Get all products

POST /api/products – Add a new product

PUT /api/products/:id – Update a product

DELETE /api/products/:id – Delete a product

🧱 Tech Stack
Angular 17

Node.js 20

Express.js

MongoDB

Mongoose

Docker

GitHub Actions

AWS EC2 (Ubuntu)

💡 Future Enhancements
🔐 JWT Auth for Users/Admin

🛍️ Cart and Checkout flow

🧾 Orders, Payments, and Invoicing

📦 Admin Dashboard (Angular Material)

📈 Analytics + Monitoring

📸 Screenshots
Add screenshots here once deployed

📜 License
MIT License. Feel free to fork and use for your own projects.

✨ Author
Made with 💻 by Your Name

yaml
Copy
Edit

---

### ✅ Next Steps

- Copy-paste this into your `README.md`
- Replace:
  - `https://github.com/your-username/ecommerce-app.git`
  - Your name and profile link
  - Add screenshots (optional)

Would you like help:
- 📷 Capturing and adding live screenshots?
- 🗂 Pushing to GitHub publicly?
- 🧪 Adding test cases or authentication?

Let me know how you'd like to polish or expand it!