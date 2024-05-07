import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Progress } from "@material-tailwind/react";
const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContex);
  const location=useLocation()
  console.log(location.pathname)
  if(loading){
    return    <Progress
    value={50}
    size="lg"
    className="border border-gray-900/10 bg-gray-900/5 p-1"
  />
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;
