import { Button } from "@material-tailwind/react";
import checkout from "../assets/images/checkout/checkout.png";

const AddNewService = () => {
  return (
    <>
      <div className=" md:mt-12 relative">
        <p className="text-5xl text-white font-bold absolute top-1/2 left-24">
          Add New Service
        </p>
        <img className="w-full h-full " src={checkout} alt="" />
        <p className=" left-1/2 flex text-xl bg-[#FF3811] text-white font-bold absolute bottom-0 p-3 rounded-lg">
          <span>Home/</span>
          <span>Services</span>
        </p>
      </div>
      <div className="space-y-4 bg-[#F3F3F3]  p-24 flex flex-col mx-auto rounded-lg my-32">
        <div className="md:flex gap-6 mx-auto">
          <div className="flex w-[530px] flex-col gap-6">
            <input
              className="bg-[#FFFFFF] p-2 rounded-lg"
              placeholder=" First Name"
            />
            <input
              className="bg-[#FFFFFF] p-2 rounded-lg"
              placeholder="Your Phone"
            />
          </div>
          <div className="flex w-[530px] flex-col gap-6">
            <input
              className="bg-[#FFFFFF] p-2 rounded-lg"
              placeholder=" Last Name"
            />
            <input
              className="bg-[#FFFFFF] p-2 rounded-lg"
              placeholder="Your Email"
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
            className="mt-6 bg-[#FF3811] capitalize text-lg font-semibold"
            fullWidth
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddNewService;
