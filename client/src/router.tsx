import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Callback from "./pages/Callback";
import ErrorPage from "./pages/ErrorPage";

type Props = {
  toggleTheme: () => void;
  mode: "light" | "dark";
};

const router = ({ toggleTheme, mode }: Props) =>
  createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard toggleTheme={toggleTheme} mode={mode} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/callback",
      element: <Callback />,
    },
    {
      path: "/500",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

export default function Routes({ toggleTheme, mode }: Props) {
  return <RouterProvider router={router({ toggleTheme, mode })} />;
}
