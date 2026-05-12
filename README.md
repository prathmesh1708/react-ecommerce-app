eSHOP - React E-Commerce App

A fully functional e-commerce web application built with React.js, inspired by Amazon.

##  Live Demo
https://react-ecommerce-app-pi.vercel.app/

##  Built With

- React.js - Frontend framework
- React Router DOM v6 - Page navigation
- Context API + useReducer - Global state management (basket, user)
- Firebase** - Authentication (Sign In / Register)
- Material UI (MUI) - Icons
- React Number Format - Currency formatting
- CSS - Custom styling

##  Features

-  Browse products on the home page
-  Add products to basket
-  Remove products from basket
-  Live basket count in header
-  Real-time subtotal calculation
-  User authentication (Sign In / Register) with Firebase
-  Responsive layout
- Multi-page routing (Home, Checkout, Login)

# Project Structure
src/
├── App.js              # Main app with routing
├── index.js            # Entry point with StateProvider
├── reducer.js          # Global state logic
├── StateProvider.js    # Context API setup
├── Firebase.js         # Firebase config
├── Header.js           # Navigation bar
├── Home.js             # Product listing page
├── Product.js          # Single product card
├── Checkout.js         # Checkout page
├── CheckoutProduct.js  # Single checkout item
├── Subtotal.js         # Order summary
└── Login.js            # Login / Register page

