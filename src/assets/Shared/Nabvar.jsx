import logo from "../../assets/logo.svg";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Nabvar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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
            className="text-[#FF3811] border border-[#FF3811] text-base"
          >
            Appointment
          </Button>
        </div>
        {/* <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton> */}
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button variant="outlined">Appointment</Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
};
export default Nabvar;
