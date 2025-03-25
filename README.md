# Coralsoft Test Task

## Deployment

The project is deployed on Vercel. To deploy your project, follow these steps:

1. **Clone the Repository:**
   git clone https://github.com/voronine/front-end-test-task
   cd your-repo

2. **Install Dependencies:**

npm install

3. **Build the Project:**

npm run build

4. **Deploy on Vercel:**

https://front-end-test-task-eight.vercel.app/

login: test@test.test
password: password


**Project Overview**
This project is a dashboard application for displaying cat breed statistics. It demonstrates proficiency in modern frontend development using the following technologies:

React for building UI components.

TypeScript for static type checking.

Redux Toolkit for state management.

RTK Query for API calls.

React Router for routing.

Recharts for data visualization.

Preline UI for ready-to-use UI components.

Tailwind CSS for utility-first styling.

Vite for fast build and development.

The project adheres to SOLID and DRY principles, ensuring that each component and hook has a single responsibility and that code duplication is minimized. All core functionality is split into reusable, modular components.

├── package.json
├── tsconfig.json
├── tsconfig.app.json          // TypeScript configuration for the app
├── tsconfig.node.json         // TypeScript configuration for node (e.g., vite.config.ts)
├── postcss.config.cjs         // PostCSS configuration (CommonJS)
├── tailwind.config.mjs        // Tailwind CSS configuration (ES module)
├── vite.config.ts             // Vite configuration
├── public/
│   └── index.html             // HTML template
└── src/
    ├── main.tsx               // Application entry point
    ├── main.css               // Main CSS with Tailwind directives
    ├── app/
    │   ├── home.tsx           // Dashboard (Home Page)
    │   └── signIn.tsx         // Sign In page
    ├── components/
    │   ├── LoginForm.tsx      // Login form component
    │   ├── FilterAndSortBar.tsx  // Filter and sort controls component
    │   ├── ChartCard.tsx      // Wrapper component for charts
    │   ├── CatsGrid.tsx       // Grid component for displaying cat cards
    │   ├── DarkModeToggle.tsx // Dark mode toggle component
    │   └── __tests__/         // Test files for components
    ├── services/
    │   └── catsService.ts     // RTK Query service for TheCatAPI
    ├── store/
    │   ├── store.ts           // Redux store configuration
    │   └── slices/
    │       └── authSlice.ts   // Authentication slice
    ├── hooks/
    │   ├── useChartData.ts    // Hook to process chart data from cat breeds
    │   ├── useFilterAndSort.ts  // Hook for filtering and sorting cat breeds
    │   ├── useDarkMode.ts     // Hook for toggling dark mode
    │   └── useLogin.ts        // Hook for handling login
    └── validation/
        └── loginValidation.ts // Validation schema for the login form


**Features**

-Sign In Page

Login Form: Built using Formik with validation (using Yup) for email and password.

Fake Authentication: Accepts only test@test.test as email and password as the password; otherwise, displays an error.

Error Handling and Loading State: Displays error messages and a loading spinner during authentication.

Dark Mode Support: Uses Tailwind CSS dark: classes for adaptive styling.

-Dashboard (Home Page)

Data Integration: Uses RTK Query (useGetBreedsQuery) to fetch cat breed data from TheCatAPI.

Charts: Displays various charts (Adaptability Distribution, Affection Levels, Origins, Indoor vs Outdoor, Lap Cat Distribution, Life Span Distribution) using Recharts.

Filter and Sort: Implements filtering and sorting functionality via the custom hook useFilterAndSort and the UI component FilterAndSortBar.

-Custom Hooks

useChartData: Processes raw cat breed data into arrays suitable for chart components.

useFilterAndSort: Manages filtering (by breed name and origin) and sorting (by various parameters) of the cat data.

useDarkMode: Manages the dark mode state by reading and setting the theme in localStorage and toggling the dark class on the document.

useLogin: Handles the login process by dispatching Redux actions (loginStart, loginSuccess, loginFailure) based on a simulated backend response.

-Redux and RTK Query

authSlice: Manages authentication state (user, loading, error, status) with actions for login and logout.

catsService: RTK Query service for fetching cat breeds from TheCatAPI.


SOLID and DRY Principles
Single Responsibility: Each component and hook is responsible for a specific part of the application (e.g., LoginForm only handles login UI, useChartData only processes chart data).

Open/Closed: The application components are designed to be extended without modifying existing code (e.g., additional charts can be added using the ChartCard component).

Liskov Substitution: Components are designed with strict type definitions ensuring they can be replaced or extended without breaking functionality.

Interface Segregation: Components accept only the props they need; hooks expose specific methods for state updates.

Dependency Inversion: High-level modules (UI components) depend on abstractions (custom hooks, Redux actions) rather than concrete implementations.

DRY (Don't Repeat Yourself): Reusable logic (like filtering, sorting, chart data processing, dark mode toggling) is encapsulated in custom hooks and shared components.


**Testing**
The project is covered by tests to ensure key functionality:

Authentication and Login: Tests for the LoginForm component and authSlice ensure that login actions work correctly.

Redux Slice (authSlice): Unit tests verify that state updates correctly for loginStart, loginSuccess, loginFailure, logout, and updateUserInfo.

Integration Tests for Dashboard: Tests verify that the HomePage renders charts, filters, and cat cards properly under different states (loading, error, successful data load).

Only two tests remain for the slice and login; the rest of the tests are in place as needed.

**Conclusion**
This project meets all core requirements of the test task:

A fully functional Sign In page with validation, error handling, and a fake authentication backend.

A Dashboard that displays cat breed data with various charts, filter and sort functionality, and a responsive grid of cat cards.

Implementation of dark mode using a custom hook and Tailwind CSS dark: classes.

A well-structured project following modern frontend best practices (SOLID, DRY).

Comprehensive test coverage for critical components and Redux logic.

Deployment on Vercel with a live URL.


This documentation provides an overview of the project, detailed instructions on setup and deployment, and explanations of each major part of the application. It serves as a complete guide for maintaining and extending the project in the future.