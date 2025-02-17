<h1>Folder Structure</h1>
src/
├── assets/                  # Static assets (images, icons, etc.)
├── components/    
│   ├── AddFood/
│   ├── AddRestaurant/
│   ├── AllRestaurants/   
│   ├── CartItem/ 
│   ├── CartListView/  
│   ├── CartSummary/ 
│   ├── EmptyCartView/ 
│   ├── Header/
│   ├── FilterGroup/ 
│   ├── FoodItemDetails/
│   ├── Footer/
│   ├── Header/
│   ├── LoginPopUp/
│   ├── MenuList/
│   ├── ProtectedRoute/
│   ├── RestaurantCard/
│   ├── RestaurantHeader/
│   ├── Restaurants/
│   ├── SearchDishes/
│   ├── SearchRestaurants/
│   ├── SignupPopUp/
│   ├── UpdateRestaurant/
│   ├── VendorHeader/
│   ├── VendorLogin/
│   └── VendorRegister/

├── context/ # State management
│ ├── AuthContext.js
│ ├── CartContext.js
│ └── RestaurantContext.js

├── hooks/
│ ├── useFetchCuisines.js
│ ├── useFetchDishes.js
│ ├── useFetchFoodItems.js
│ └── useFetchRestaurants.js

├── pages/  
│ ├── Dashboard/ # Login and Signup
│ ├── Home/  
│ ├── Search/
│ ├── Cuisines/  
│ ├── FoodItems/
│ ├── VendorDashboard/
│ ├── VendorHome/
│ ├── VendorMenu/

├── services/
│ └── api.js

├── utils/
│ ├── data.js
│ └── enums.js

├── App.js # Main app component
└── index.js # Entry point
