import feature5 from "../assets/icons/group.svg";
import feature1 from "../assets/icons/person.svg";
import feature2 from "../assets/icons/deliveryt.svg";
import feature4 from "../assets/icons/Wrench.svg";
import feature6 from "../assets/icons/check.svg";
import { BsClock } from "react-icons/bs";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Features = () => {
    return (
        <div className="my-12">
        <div className="text-center mb-8 space-y-4">
          <p className="text-[#FF3811] text xl font-bold">Core Features</p>
          <h2 className="text-5xl font-bold">Why Choose Us</h2>
          <p>
            <small>
            the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. 
            </small>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4  md:grid-cols-6  ">
          <Card className="shadow-none border h-48">
            <CardHeader floated={false} className="h-60 shadow-none mx-auto">
              <img src={feature5} alt="gallery-photo" />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
              Expert Team
              </Typography>
            </CardBody>
          </Card>
          <Card className="shadow-none bg-[#FF3811]  border h-48">
            <div  className="h-60 shadow-none mx-auto">
              <BsClock className=" md:mt-12 text-5xl font-extrabold bg-white rounded-full border-4 border-white text-red-900"></BsClock>
            </div>
            <CardBody >
              <Typography variant="h6" color="white" className="mb-2 text-center">
                Timely Delivery
              </Typography>
            
            </CardBody>
          </Card>
          <Card className="shadow-none  border h-48">
            <CardHeader floated={false} className="h-60 shadow-none mx-auto">
              <img src={feature1} alt="gallery-photo" />
            </CardHeader>
            <CardBody >
              <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
                Auto Car Repair
              </Typography>
             
            </CardBody>
          </Card>
          <Card className="shadow-none  border h-48">
            <CardHeader floated={false} className="h-60 shadow-none mx-auto">
              <img src={feature4} alt="gallery-photo" />
            </CardHeader>
            <CardBody >
              <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
                Engine Diagnostics
              </Typography>
            </CardBody>
          </Card>
          <Card className="shadow-none  border h-48">
            <CardHeader floated={false} className="h-60 shadow-none mx-auto">
              <img src={feature6} alt="gallery-photo" />
            </CardHeader>
            <CardBody >
              <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
                Auto Car Repair
              </Typography>
           
            </CardBody>
          </Card>
          <Card className="shadow-none  border h-48">
            <CardHeader floated={false} className=" shadow-none h-60 mx-auto">
              <img src={feature2} alt="gallery-photo" />
            </CardHeader>
            <CardBody >
              <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
                Auto Car Repair
              </Typography>
            
            </CardBody>
          </Card>
        </div>
      </div>
    );
};

export default Features;