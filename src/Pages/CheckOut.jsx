import { Button } from "@material-tailwind/react";
import checkout from "../assets/images/checkout/checkout.png";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const services = useLoaderData();
  const { title, price, service_id, img } = services;
  const { user } = useContext(AuthContex);
  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const checkoutInformation = {
      customerName: name,
      email: email,
      date,
      Service: title,
      Image: img,
      service_id,
      price: price,
    };
    console.log(checkoutInformation);
    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(checkoutInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your user create successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <>
      <div className="text-center font-4xl font-bold text-red-900">
        <h2 className="text-xl p-4">Service Name : {title}</h2>
      </div>
      <div className=" mt-4 relative">
        <p className="text-2xl md:text-5xl text-white font-bold absolute top-1/2 left-24">
          Checkout
        </p>
        <img className="w-full h-full sm:p-4" src={checkout} alt="" />
        <p className=" left-1/2 flex text-xs md:text-xl bg-[#FF3811] text-white font-bold absolute bottom-0 p-3 rounded-lg">
          <span>Home/</span>
          <span>Checkout</span>
        </p>
      </div>

      <form onSubmit={handleCheckOut}>
        <div className="space-y-4 bg-[#F3F3F3] p-4 md:p-24 flex flex-col mx-auto rounded-lg my-8 md:my-32">
          <div className="md:flex w-full  gap-6 mx-auto items-center justify-center">
            <div className="flex  md:w-[530px] flex-col gap-6 ">
              <input
                className="bg-[#FFFFFF] p-2 rounded-lg"
                placeholder=" Your Name"
                name="name"
                type="Name"
                defaultValue={user?.displayName}
              />
              <input
                className="bg-[#FFFFFF] p-2 rounded-lg"
                placeholder="Your Email"
                name="email"
                type="email"
                defaultValue={user?.email}
              />
            </div>
            <div className="flex md:w-[530px] flex-col gap-6">
              <input
                className="bg-[#FFFFFF] p-2 rounded-lg"
                placeholder="Date"
                name="date"
                type="date"
              />
              <input
                className="bg-[#FFFFFF] p-2 rounded-lg"
                placeholder="Due Amount"
                type="price"
                defaultValue={"$" + price}
                name="price"
              />
            </div>
          </div>
          <div className="mt-4 md:w-[946]  ">
            <textarea
              className="bg-[#FFFFFF] border rounded-lg p-2 w-full"
              placeholder="Your Comment"
              rows={10}
            />
            <Button
              type="submit"
              className="mt-6 bg-[#FF3811] capitalize text-lg font-semibold"
              fullWidth
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOut;
