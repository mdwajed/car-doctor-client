import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import login from "../../src/assets/images/login/login.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import axios from "axios";
const Login = () => {
  const { signin } = useContext(AuthContex);
  const hahdleLogin = (event) => {
    event.preventDefault();
    console.log("wajed");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        // navigate(location?.state? location?.state : '/')
        //get access token
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:flex justify-around items-center my-8">
      <div>
        <img src={login} alt="" />
      </div>
      <Card color="transparent" shadow={false} className="border-2 p-12">
        <Typography variant="h3" color="blue-gray" className="text-center">
          Log In
        </Typography>

        <form
          onSubmit={hahdleLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              type="email"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Confirm Password
            </Typography>
            <Input
              type="password"
              size="lg"
              name="password"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button type="submit" className="mt-6 bg-[#FF3811]" fullWidth>
            Log In
          </Button>

          <Typography
            variant="h6"
            color="blue-gray"
            className="text-center mt-6"
          >
            Or Sign In with
          </Typography>
          <div>
            <p className="flex justify-center items-center my-6 gap-6">
              <FaFacebookF className="bg-[#F5F5F8] rounded-full p-3 text-5xl text-[#3B5998]"></FaFacebookF>
              <FaLinkedinIn className="bg-[#F5F5F8] rounded-full p-3 text-5xl text-[#3B5998]"></FaLinkedinIn>
              <FcGoogle className="bg-[#F5F5F8] rounded-full p-3 text-5xl"></FcGoogle>
            </p>
          </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Do not have an account?{" "}
            <Link to="/signup" className="font-medium text-red-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};
export default Login;
