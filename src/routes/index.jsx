import { Outlet, useRoutes } from "react-router-dom";
import EmailVerificationPage from "../pages/EmailVerificationPage";
import ForumPage from "../pages/forum/ForumPage";
import Home from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/postPage/PostPage";
import RegisterPage from "../pages/RegisterPage";
import RequireAuth from "./require-auth";

const Router = () => {
  return useRoutes([
    // /path/login
    // /path/register
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "forum",
      element: (
        <RequireAuth>
          <Outlet />
        </RequireAuth>
      ),
      children: [
        {
          path: "",
          element: <ForumPage />,
        },
        {
          path: "category/:id",
          element: <PostPage />,
        },
      ],
    },
    {
      path: "/verify",
      element: <EmailVerificationPage />,
    },
  ]);
};

export default Router;
