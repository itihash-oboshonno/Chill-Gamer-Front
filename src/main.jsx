import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import AuthProvider from "./providers/AuthProvider";
import SignUp from "./components/PrivateRoutes/SignUp";
import Login from "./components/PrivateRoutes/Login";
import AllReviews from "./components/AllReviews";
import AddReview from "./components/PrivateRoutes/AddReview";
import MyReviews from "./components/PrivateRoutes/MyReviews";
import GameWatchlist from "./components/PrivateRoutes/GameWatchlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allreviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/addreview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/myreviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/watchlist",
        element: <GameWatchlist></GameWatchlist>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
