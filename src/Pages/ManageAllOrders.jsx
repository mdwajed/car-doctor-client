import { ImCross } from "react-icons/im";
import img from "../assets/images/checkout/checkout.png";
import { SlArrowDown } from "react-icons/sl";
import {
  Card,
  Typography,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Provider/AuthProvider";
const TABLE_HEAD = ["", "Image", "Service", "Email", "Price", "Date", ""];
const ManageAllOrders = () => {
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
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCheckout(data);
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
            Home - Products Details
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
                        <ImCross className=" rounded-full w-3 h-3 text-white"></ImCross>
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
                      <p className="flex items-center gap-2 text-green-800 border border-green-800 p-1 md:w-24 rounded-lg text-center">
                        <span>Approved</span>{" "}
                        <SlArrowDown className="text-green-800  "></SlArrowDown>
                      </p>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default ManageAllOrders;
