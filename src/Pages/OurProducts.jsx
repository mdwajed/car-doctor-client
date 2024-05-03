import { Button } from "@material-tailwind/react";
import product1 from "../assets/images/products/1.png";
import product2 from "../assets/images/products/2.png";
import product3 from "../assets/images/products/3.png";
import product4 from "../assets/images/products/4.png";
import product5 from "../assets/images/products/5.png";
import product6 from "../assets/images/products/6.png";
import { IoStar } from "react-icons/io5";
const OurProducts = () => {
  return (
    <div className="my-24 ">
      <div className="text-center space-y-5 mb-4">
        <p className="text-[#FF3811] text-lg font-bold">Popular Products</p>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p>
          {" "}
          <small>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.{" "}
          </small>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="card w-96 h-[389px] bg-base-100 border-2 rounded-xl">
          <figure className="mt-8 w-[314px] h-[215px] mx-auto">
            <img
              src={product1}
              alt="Shoes"
              className="rounded-xl bg-[#F3F3F3] px-20 py-8"
            />
          </figure>
          <div className="card-body items-center text-center my-6 space-y-2">
            <div className="text-[#FF912C] flex justify-center text-2xl">
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
            </div>
            <h2 className="card-title text-xl">Car Engine Plug</h2>
            <p className="text-base font-semibold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-96 h-[389px] bg-base-100 border-2 rounded-xl">
          <figure className="mt-8 w-[314px] h-[215px] mx-auto">
            <img
              src={product2}
              alt="Shoes"
              className="rounded-xl bg-[#F3F3F3] px-20 py-8"
            />
          </figure>
          <div className="card-body items-center text-center my-6 space-y-2">
            <div className="text-[#FF912C] flex justify-center text-2xl">
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
            </div>
            <h2 className="card-title text-xl">Car Engine Plug</h2>
            <p className="text-base font-semibold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-96 h-[389px] bg-base-100 border-2 rounded-xl">
          <figure className="mt-8 w-[314px] h-[215px] mx-auto">
            <img
              src={product3}
              alt="Shoes"
              className="rounded-xl bg-[#F3F3F3] w-full h-full px-20 py-8"
            />
          </figure>
          <div className="card-body items-center text-center my-6 space-y-2">
            <div className="text-[#FF912C] flex justify-center text-2xl">
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
            </div>
            <h2 className="card-title text-xl">Car Engine Plug</h2>
            <p className="text-base font-semibold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-96 h-[389px] bg-base-100 border-2 rounded-xl">
          <figure className="mt-8 w-[314px] h-[215px] mx-auto">
            <img
              src={product4}
              alt="Shoes"
              className="rounded-xl bg-[#F3F3F3] w-full h-full px-20 py-8"
            />
          </figure>
          <div className="card-body items-center text-center my-6 space-y-2">
            <div className="text-[#FF912C] flex justify-center text-2xl">
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
            </div>
            <h2 className="card-title text-xl">Car Engine Plug</h2>
            <p className="text-base font-semibold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-96 h-[389px] bg-base-100 border-2 rounded-xl">
          <figure className="mt-8 w-[314px] h-[215px] mx-auto">
            <img
              src={product5}
              alt="Shoes"
              className="rounded-xl bg-[#F3F3F3] px-20 py-8"
            />
          </figure>
          <div className="card-body items-center text-center my-6 space-y-2">
            <div className="text-[#FF912C] flex justify-center text-2xl">
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
            </div>
            <h2 className="card-title text-xl">Car Engine Plug</h2>
            <p className="text-base font-semibold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-96 h-[389px] bg-base-100 border-2 rounded-xl">
          <figure className="mt-8 w-[314px] h-[215px] mx-auto">
            <img
              src={product6}
              alt="Shoes"
              className="rounded-xl bg-[#F3F3F3] px-20 py-8"
            />
          </figure>
          <div className="card-body items-center text-center my-6 space-y-2">
            <div className="text-[#FF912C] flex justify-center text-2xl">
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
            </div>
            <h2 className="card-title text-xl">Car Engine Plug</h2>
            <p className="text-base font-semibold text-[#FF3811]">$20.00</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-12 "><Button className="border border-[#FF3811] text-[#FF3811] capitalize text-lg"  variant="outlined">More Products</Button></div>
    </div>
  );
};

export default OurProducts;
