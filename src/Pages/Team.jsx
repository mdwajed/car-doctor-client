import team1 from "../assets/images/team/1.jpg";
import team2 from "../assets/images/team/2.jpg";
import team3 from "../assets/images/team/3.jpg";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Team = () => {
  return (
  <div className="flex items-center relative my-24">
         <FaArrowLeft className="absolute top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full text-4xl left-1 z-10 p-2" />
      <FaArrowRight className="absolute top-1/2 transform -translate-y-1/2 bg-[#FF3811] rounded-full text-4xl right-1 z-10 p-2" />
   <div>
      <div className="text-center mb-8 space-y-4">
        <p className="text-[#FF3811] text xl font-bold">Team</p>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>
        <p>
          <small>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.
          </small>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4  md:grid-cols-3  ">
        <Card className="shadow-none border">
          <CardHeader floated={false} className="h-60 shadow-none">
            <img src={team1} alt="gallery-photo" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
              Car Engine Plug
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
              Engine Expert
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none  border">
          <CardHeader floated={false} className="h-60 shadow-none">
            <img src={team2} alt="gallery-photo" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
              Car Engine Plug
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
              Engine Expert
            </Typography>
            <div className="flex justify-center gap-4 mt-4 ">
              <FaFacebook className="text-[#395185] w-10 h-10 rounded-full"></FaFacebook>
              <AiFillTwitterCircle className="text-[#55ACEE] w-11 h-11 rounded-full"></AiFillTwitterCircle>
              <BsLinkedin className="text-[#0A66C2] w-10 h-10 rounded-full"></BsLinkedin>
              <GrInstagram className=" w-10 h-10 rounded-full "></GrInstagram>
            </div>
          </CardBody>
        </Card>
        <Card className="shadow-none  border">
          <CardHeader floated={false} className="h-60 shadow-none">
            <img src={team3} alt="gallery-photo" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
              Car Engine Plug
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
              Engine Expert
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Team;
