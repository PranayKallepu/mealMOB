# MealMOB 
### [Project-Live](https://mealmob-client.onrender.com/)

mealMOB is a food delivery website that helps users discover popular restaurants in Warangal, inspired by Swiggy and Zomato. The platform allows users to browse, filter, and order food from various restaurants.

## Features

- **User Authentication**: Secure login/signup using JWT tokens.
- **Vendor Authentication**: Only approved vendors can add restaurants.
- **Restaurant Listings & Filters**: Search and filter restaurants by name, rating, or food items.
- **Restaurant Navigation**: View individual restaurant details and menu.
- **Cart System**: Users can add food items to the cart before ordering.
- **Responsive UI**: Designed with a mobile-first approach for better accessibility.

## Technologies Used

### Frontend:

- React.js
- JavaScript
- Styled Components

### Backend:

- Node.js
- Express.js
- REST APIs
- JWT Authentication

### Database:

- MongoDB (MongoDB Atlas)

### NPM Packages Used

#### Frontend:

- axios
- hamburger-react
- js-cookie
- react-icons
- reactjs-popup
- slick-carousel
- styled-components
- uuid

#### Backend:

- express
- mongoose
- jsonwebtoken
- multer
- multer-storage-cloudinary
- bcryptjs
- body-parser
- cloudinary
- cors
- dotenv

## Implementation Approach

1. **Database Setup**: Created a MongoDB Atlas cluster to store restaurant and food item data.
2. **Backend Development**: Built REST APIs in Node.js to handle authentication, restaurant data, and cart operations.
3. **API Testing**: Tested all APIs using Postman before integrating with the frontend.
4. **Frontend Development**: Developed UI with React.js, created reusable components, and applied styled components for design.
5. **API Integration**: Used Axios for fetching data and Context API for state management.
6. **Performance Optimization**: Applied caching techniques and optimized API calls.

## Challenges & Solutions

- **MongoDB Network Access Issues** → Resolved by configuring IP whitelisting in MongoDB Atlas.
- **Handling Image Uploads** → Used Multer and Cloudinary for smooth image storage.
- **CORS Issues** → Fixed by setting up proper CORS middleware in Express.js.

## Best Practices Followed

- **Modular Code**: Divided into services, hooks, pages, utils and components for better maintainability.
- **Organized Folder Structure**: Ensured clear structure for easy debugging.
- **Proper Naming Conventions**: Followed best coding practices for readability.

## How to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/mealmob.git
   cd mealmob
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the backend server**:
   ```bash
   cd server
   node server.js
   ```
4. **Start the frontend**:
   ```bash
   cd client-side
   npm start
   ```

## Contact

For any queries or collaborations, feel free to reach out at [pranaykallepu05@gmail.com](mailto\:pranaykallepu05@gmail.com).

---

🚀 **mealMOB – Simplifying Food Delivery in Warangal!**

