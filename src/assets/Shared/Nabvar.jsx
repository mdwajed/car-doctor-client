import logo from "../../assets/logo.svg";
import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";

const Nabvar = () => {
  const { user, logOut } = useContext(AuthContex);
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-lg"
      >
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-lg"
      >
        <NavLink to="/about" className="flex items-center">
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-lg"
      >
        <NavLink to="/service" className="flex items-center">
          Service
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-lg"
      >
        <NavLink to="/blog" className="flex items-center">
          Blog
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-lg"
      >
        <NavLink to="/contact" className="flex items-center">
          Contact
        </NavLink>
      </Typography>
      {user?.email ? (
        <Button
          onClick={handleLogout}
          className="bg-gradient-to-r from-blue-500 to-purple-300"
        >
          Logout
        </Button>
      ) : (
          <Link to="/login">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-300">
              Login
            </Button>
          </Link>
       
      )}
    </ul>
  );

  return (
    <Navbar className=" px-4 py-2 lg:px-8 lg:py-4 shadow-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <div className="flex gap-4 px-4 text-2xl font-extrabold">
            <HiOutlineShoppingBag></HiOutlineShoppingBag>
            <FiSearch></FiSearch>
          </div>
          <Button
            variant="outlined"
            className="text-[#FF3811] border border-[#FF3811] text-base capitalize"
          >
            Appointment
          </Button>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
};
export default Nabvar;
