import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Logoin/Login";
import SignUp from "../Logoin/SignUp";
import CheckOut from "../Pages/CheckOut";
import AddNewService from "../Pages/AddNewService";
import CartDetails from "../Pages/CartDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addnewservice",
        element: <AddNewService></AddNewService>,
      },
      {
        path: "/cartdetails",
        element: (
          <PrivateRoute>
            {" "}
            <CartDetails></CartDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
    ],
  },
]);
export default router;
