# My-Final-Project
# 🛒 Full-Stack E-Commerce Cloud Application

A modern, secure, and production-ready full-stack E-Commerce web application. This project features a highly responsive frontend built with React and Vite, powered by a serverless cloud backend on AWS, and integrated with a scalable relational database and secure user management via Supabase.

---

## 🛠️ Tech Stack & Architecture

*   **Frontend:** React.js, Vite, HTML5, CSS3 / Tailwind CSS
*   **Serverless Backend:** AWS Lambda, AWS API Gateway
*   **Database & Authentication:** Supabase (PostgreSQL, Supabase Auth)

---

## 🚀 Key Features Implemented

*   **Secure User Management:** Implemented complete user authentication flows (Sign Up, Secure Log In, and Session Management) using Supabase Auth, combined with automated email confirmation verification.
*   **Dynamic Shopping Experience:** Built a responsive cart layout capable of handling product additions, item deletions, quantity updates, and accurate real-time price calculations (Subtotal, Shipping Fee, and Grand Total).
*   **Serverless Order Processing:** Connected frontend endpoints to AWS Lambda functions via API Gateway triggers to securely handle and process order placements.
*   **Robust Data Storage:** Structured a dynamic relational database schema in Supabase to track transaction logs and securely map purchase histories against unique User IDs (UIDs).

---

## 📸 Application Preview & Visual Proof

### 🖥️ Frontend User Interface

#### 1. Home Dashboard & Dynamic E-Commerce Experience
Features a responsive catalog layout with a fully integrated countdown timer, category filters, and interactive product cards.
![Main Website]
[<img src="./assets/homepage.png" alt="Main Website" width="900">](https://github.com/bhartibhatt810-ux/my-final-project/blob/main/Main%20Website.png)


#### 2. Cart Page & Order Calculation
Displays real-time price updates, item counts, and custom shipping handling before final checkout.
![Your Cart]
[<img src="./assets/homepage.png" alt="Your Cart" width="900">](https://github.com/bhartibhatt810-ux/my-final-project/blob/main/YourCart.png)

#### 3. Secure User Authentication Flow
Clean login interface integrated with robust frontend validation and automatic session management.
![Login Page]
[<img src="./assets/homepage.png" alt="Login Page" width="900">](https://github.com/bhartibhatt810-ux/my-final-project/blob/main/Login.png)

#### 4. Automated Verification System
Displays the working integration of automated confirmation emails sent out via the auth handler.
![Email Confirmation]
[<img src="./assets/homepage.png" alt="Email Confirmation" width="900">](https://github.com/bhartibhatt810-ux/my-final-project/blob/main/Confirmation.png)

#### 5. User Order History
A dedicated UI panel pulling live data from the database to present clean receipt histories directly to the verified user.
![Order History]
[<img src="./assets/homepage.png" alt="Order History" width="900">](https://github.com/bhartibhatt810-ux/my-final-project/blob/main/Order%20History.png)

---

### ⚙️ Backend & Cloud Infrastructure

#### 6. AWS API Gateway & Lambda Integration
Demonstrates the cloud architecture where backend orders API routing endpoints trigger microservices seamlessly.
![AWS Console]
[<img src="./assets/homepage.png" alt="Api Gateway" width="900">](https://github.com/bhartibhatt810-ux/my-final-project/blob/main/Purchase%20History.png)

#### 7. Supabase Authentication Dashboard
A snapshot of protected user database storage showing real-time sign-ins and encrypted security parameters.
![Supabase Users]
[<img src="./assets/homepage.png" alt="Authentication Dashboard" width="900">](https://github.com/bhartibhatt810-ux/my-final-project/blob/main/Authentication.png)

#### 8. Relational Orders Database Schema
A secure glimpse into the cloud relational database tables capturing active JSON payloads, item breakdowns, and specific transaction tracking.
![Orders Table]
[<img src="./assets/homepage.png" alt="Orders Table" width="900">](https://github.com/bhartibhatt810-ux/my-final-project/blob/main/Purchase%20History.png)
