# Mini-eCommerce
Mini E-commerce web application, demonstrate product listing page and search filters, admin can add new product. 

# How to run
Just run npm install for frontend and backend folders for node_module instalation.
run backend server using npm run dev
run frontend  using npm start

![beakend_running](https://github.com/user-attachments/assets/1eb81c2c-faf5-4d05-8d32-f7c567f5ccc4)

![frntend_runing](https://github.com/user-attachments/assets/f4840393-7a4c-457d-96ce-68127b0950db)

# Frontend Output
![frontend](https://github.com/user-attachments/assets/246def1f-c0a4-42ba-9fe1-9fa9cd1dee6a)

# Cloud Deployment Steps: 
1.Frontend: Build React app → Upload static files to AWS S3 → Serve via CloudFront.
2.Backend: Host Express API on AWS EC2 (Ubuntu) → Setup Nginx reverse proxy → Auto-start via PM2.
3.Database: Create AWS RDS MySQL instance.
4.Images (optional): Upload via AWS S3 SDK, store URLs in DB.
5.Auth: Secure endpoints with JWT and optionally enable HTTPS using ACM certificates.

# Project Management Documentation:
Dtailed Project plan/execution and cloud intigration guide inside this repository home page.

