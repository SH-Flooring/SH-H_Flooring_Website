# Construction Company Website

Welcome to the Construction Company Website project! This is a full-stack web application designed to showcase the services and projects of a construction company. The application features a user-friendly front end and a robust back end, enabling users to explore various construction services, and contact the company easily.

## Features
- **Responsive Design**: The website is fully responsive, providing an optimal viewing experience on desktops, tablets, and smartphones.
- **Service Listings**: Users can view a list of construction services offered by the company.
- **Project Portfolio**: Showcase of completed projects with images and descriptions.
- **Contact Form**: Users can easily get in touch with the company through a contact form.

## Tech Stack
- **Front End**:
  - React
  - Tailwind CSS
  - React-Router
  - React-Hook-Form
  - React-Icons
- **Back End**:
  - Node.js
  - Express.js
  - MongoDB (or your chosen database)

## Installation
To get started with the project, follow these steps:
npm i 
npm run dev
npm i react-router-dom
npm i react-hook-form
npm i react-icons
npm i @headlessui/react
npm i @heroicons/react
npm install -D tailwindcss postcss autoprefixer
npm tailwindcss init -p

#Setting up vercel
To upload the project on vercel, we need to upload the file via github and create two separate project for frontend and backend and upload the files respectively. For backend, we need to add the environment variable that we have added in the backend folder with same key and value which is actually a connection string for the mongo Db.

After uploading both the files on vercel, we can get our deployement link that we need to add in the project code.
We need to change the link in the backend folder in index.js file where we use cors and set the origin to the frontend link that we get from the vercel.
Then we need to change the link in the contact.jsx, infoForm.jsx and form.jsx in the frontened folder by setting up the new backened link in the fetch statement. 
Any change made in the project should be pushed to the github before deploying the projcet again.

#Passwords:

Mongo DB:
Email:shhflooring2024@gmail.com
Password: SHFlooring@2024

Github:
username:shhflooring2024@gmail.com
Password: SHFlooring@2024









