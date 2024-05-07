import group1 from "../assets/images/checkout/Group 160.png";
import group2 from "../assets/images/checkout/Group 163 (1).png";
import { ImCross } from "react-icons/im";
import img from "../assets/images/checkout/checkout.png";
import {
  Card,
  Typography,
  CardBody,
  IconButton,
  CardFooter,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import axios from "axios";
const TABLE_HEAD = ["", "Image", "Service", "Email", "Price", "Date", ""];
const CartDetails = () => {
  const { user } = useContext(AuthContex);
  const [checkout, setCheckout] = useState([]);
  const handleDelete = (id) => {
    const proceed = confirm("Are You Sure You Want to Delete");
    if (proceed) {
      fetch(`http://localhost:5000/checkout/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // Remove the deleted item from state
            setCheckout((prevCheckout) =>
              prevCheckout.filter((item) => item._id !== id)
            );
            alert("Deleted Successfully");
          }
        });
    }
  };

  const url = `http://localhost:5000/checkout?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setCheckout(res.data);
    });
  }, [url]);
  return (
    <Card className="h-full w-full my-6 shadow-none">
      <h2 className="text-4xl font-extrabold text-center text-red-900">
        Checkout : {checkout.length}
      </h2>
      <div className=" mt-4 relative">
        <div className="text-2xl md:text-5xl text-white font-bold absolute top-1/2 left-24">
          <p>Cart Details</p>
          <p className=" text-xs md:text-xl text-[#FF3811] ">
            Home-Products Details
          </p>
        </div>
        <img className="w-full h-full sm:p-4" src={img} alt="" />
      </div>
      <CardBody className="">
        <table className="mt-4 w-full min-w-max table-auto text-center">
          <thead className="bg-gray-200 ">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="p-4">
                  <Typography className="font-bold text-red-900 ">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {checkout.map(
              ({ Image, Service, email, price, date, _id }, index) => {
                const isLast = index === checkout.length - 1;
                const classes = isLast ? "p-4" : "p-4 ";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <IconButton
                        onClick={() => handleDelete(_id)}
                        variant="text"
                        className="bg-[#444444]"
                      >
                        <ImCross className=" rounded-full w-4 h-4 text-white"></ImCross>
                      </IconButton>
                    </td>
                    <td className={classes}>
                      <img
                        src={Image}
                        alt=""
                        className="w-24 ml-4 h-24 rounded"
                      />
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Service}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {price}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <p className="text-white bg-[#FF3811] p-1 md:w-20 rounded-lg text-center">
                        Pending
                      </p>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between p-4 mb-4">
        <div className="font-normal flex gap-4 ml-10">
          <img src={group1} alt="" />
          <p>Continue Shopping</p>
        </div>
        <div className="flex  gap-4 md:mr-20">
          <img src={group2} alt="" />
          <h2>Clear Shopping Cart</h2>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CartDetails;
