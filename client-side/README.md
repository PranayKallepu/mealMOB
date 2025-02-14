<h1>Folder Structure</h1>
src/
├── assets/                  # Static assets (images, icons, etc.)
├── components/              # Reusable components (Header, SearchBar, etc.)
│   ├── Header/
│   │   ├── Header.js
│   │   └── Header.styles.js
│   ├── SearchBar/
│   │   ├── SearchBar.js
│   │   └── SearchBar.styles.js
│   ├── MenuList/
│   │   ├── MenuList.js
│   │   └── MenuList.styles.js
│   └── FoodCard/            # For individual food item display
│       ├── FoodCard.js
│       └── FoodCard.styles.js
├── context/                 # React Context for state management
│   ├── AuthContext.js
│   ├── CartContext.js
│   └── RestaurantContext.js
├── pages/                   # Page-level components
│   ├── Dashboard/           # Login and Signup routes
│   │   ├── Dashboard.js
│   │   └── Dashboard.styles.js
│   ├── Login/
│   │   ├── Login.js
│   │   └── Login.styles.js
│   ├── Signup/
│   │   ├── Signup.js
│   │   └── Signup.styles.js
│   ├── Home/
│   │   ├── Home.js
│   │   └── Home.styles.js
│   ├── Search/
│   │   ├── Search.js
│   │   └── Search.styles.js
│   ├── FoodMenu/
│   │   ├── FoodMenu.js
│   │   └── FoodMenu.styles.js
│   ├── Restaurants/
│   │   ├── Restaurants.js
│   │   └── Restaurants.styles.js
│   ├── RestaurantDetails/
│   │   ├── RestaurantDetails.js
│   │   └── RestaurantDetails.styles.js
│   └── Cart/
│       ├── Cart.js
│       └── Cart.styles.js
├── routes/                  # Centralized route management
│   └── AppRoutes.js
├── styles/                  # Global styles (optional)
│   └── GlobalStyle.js
├── utils/                   # Utility functions or constants
│   ├── api.js               # Axios instance or API calls
│   ├── constants.js         # Constants (e.g., API URLs, colors)
│   └── helpers.js           # Helper functions
├── App.js                   # Main app component
└── index.js                 # Entry point
