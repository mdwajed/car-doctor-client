import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import login from "../../src/assets/images/login/login.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
const SignUp = () => {
  const { createUser } = useContext(AuthContex);
  const hahdleSignUp = (event) => {
    event.preventDefault();
    console.log("wajed");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
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
          Sign Up
        </Typography>
{/* Wn5C1XLrsjockRwt */}
        <form
          onSubmit={hahdleSignUp}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              name="name"
              
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
            
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
            sign Up
          </Button>
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-center mt-6"
          >
            Or Sign Up with
          </Typography>
          <div className="flex justify-center items-center my-6 gap-6">
            <p>
              <FaFacebookF className="bg-[#F5F5F8] rounded-full p-3 text-5xl text-[#3B5998]"></FaFacebookF>
            </p>
            <p>
              {" "}
              <FaLinkedinIn className="bg-[#F5F5F8] rounded-full p-3 text-5xl text-[#3B5998]"></FaLinkedinIn>
            </p>
            <p>
              {" "}
              <FcGoogle className="bg-[#F5F5F8] rounded-full p-3 text-5xl"></FcGoogle>
            </p>
          </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Have an account?{" "}
            <Link to="/login" className="font-medium text-red-900">
              Log In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};
export default SignUp;
