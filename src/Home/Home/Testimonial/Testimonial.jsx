import testimial1 from "../../../assets/images/team/person1.jpg";
import testimial2 from "../../../assets/images/team/person3.jpg";
import quotes from "../../../assets/icons/quote.svg";
import { IoStar } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const Testimonial = () => {
  return (
    <div className="my-24 relative">
      <FaArrowLeft className="absolute top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full text-4xl  z-10 p-2" />
      <FaArrowRight className="absolute top-1/2 transform -translate-y-1/2 bg-[#FF3811] rounded-full text-4xl right-1 z-10 p-2" />
      <div className="text-center mb-2 space-y-4">
        <p className="text-[#FF3811] text xl font-bold">Testimonial</p>
        <h2 className="text-5xl font-bold">What Customer Says</h2>
        <p>
          <small>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.
          </small>
        </p>
      </div>
      <div className="md:flex gap-8 mt-6 ">
        <div className="w-1/2 border p-16 rounded-md">
          <div className="flex justify-start gap-16">
            <div className=" flex justify-center gap-4 mb-6">
              <div>
                <img
                  className="w-16 h-14 rounded-full"
                  src={testimial1}
                  alt=""
                />
              </div>

              <div>
                <h className="text-xl font-bold">Awlad Hossain</h>
                <p className="text-base font-semibold">Businessman</p>
              </div>
            </div>
            <div>
              <img className="w-8 text-[#FF381133]" src={quotes} alt="" />
            </div>
          </div>

          <div>
            <p className="mb-6">
              <small>
                There are many variations of passages of Lorem Ipsum <br />
                available, but the majority have suffered alteration in some{" "}
                <br /> form, by injected humour, or randomised words which do
                not <br /> look even slightly believable.{" "}
              </small>
            </p>
            <div className="text-[#FF912C] flex justify-start text-2xl mt-6">
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
            </div>
          </div>
        </div>
        <div className="w-1/2 border p-16 rounded-md">
          <div className=" flex justify-start gap-16">
            <div className=" flex justify-center gap-4 mb-6">
              <div>
                <img
                  className="w-14 h-14 rounded-full"
                  src={testimial2}
                  alt=""
                />
              </div>

              <div>
                <h className="text-xl font-bold">Awlad Hossain</h>
                <p className="text-base font-semibold">Businessman</p>
              </div>
            </div>
            <div>
              <img className="w-8 text-[#FF381133]" src={quotes} alt="" />
            </div>
          </div>
          <div>
            <p className="flex justify-start mb-6">
              <small>
                There are many variations of passages of Lorem Ipsum <br />
                available, but the majority have suffered alteration in some{" "}
                <br /> form, by injected humour, or randomised words which do
                not <br />
                look even slightly believable.{" "}
              </small>
            </p>
            <div className="text-[#FF912C] flex justify-start text-2xl mt-6">
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
              <IoStar></IoStar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
