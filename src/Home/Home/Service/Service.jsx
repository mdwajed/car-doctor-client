import service1 from "../../../assets/images/services/1.jpg";
import service2 from "../../../assets/images/services/2.jpg";
import service3 from "../../../assets/images/services/3.jpg";
import service4 from "../../../assets/images/services/4.jpg";
import service5 from "../../../assets/images/services/5.jpg";
import service6 from "../../../assets/images/services/6.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
const Service = () => {
  return (
    <div className="my-24">
      <div className="text-center mb-8 space-y-4">
        <p className="text-[#FF3811] text xl font-bold">Services</p>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          <small>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.{" "}
          </small>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  ">
        <Card className="shadow-none border">
          <CardHeader floated={false} className="h-60 shadow-none">
            <img src={service1} alt="gallery-photo" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Electrical System
            </Typography>
            <Typography
              color="blue-gray"
              className=" text-lg text-[#FF3811] font-bold"
            >
              Price : $20.00
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none  border">
          <CardHeader floated={false} className="h-60 shadow-none">
            <img src={service2} alt="gallery-photo" />
          </CardHeader>
          <CardBody >
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Engine Diagnostics
            </Typography>
            <Typography
              color="blue-gray"
              className=" text-lg text-[#FF3811] font-bold"
            >
              Price : $20.00
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none  border">
          <CardHeader floated={false} className="h-60 shadow-none">
            <img src={service3} alt="gallery-photo" />
          </CardHeader>
          <CardBody >
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Auto Car Repair
            </Typography>
            <Typography
              color="blue-gray"
              className=" text-lg text-[#FF3811] font-bold"
            >
              Price : $20.00
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none  border">
          <CardHeader floated={false} className="h-60 shadow-none">
            <img src={service4} alt="gallery-photo" />
          </CardHeader>
          <CardBody >
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Engine Diagnostics
            </Typography>
            <Typography
              color="blue-gray"
              className=" text-lg text-[#FF3811] font-bold"
            >
              Price : $20.00
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none  border">
          <CardHeader floated={false} className="h-60 shadow-none">
            <img src={service5} alt="gallery-photo" />
          </CardHeader>
          <CardBody >
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Auto Car Repair
            </Typography>
            <Typography
              color="blue-gray"
              className=" text-lg text-[#FF3811] font-bold"
            >
              Price : $20.00
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none  border">
          <CardHeader floated={false} className="h-60 shadow-none">
            <img src={service6} alt="gallery-photo" />
          </CardHeader>
          <CardBody >
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Auto Car Repair
            </Typography>
            <Typography
              color="blue-gray"
              className=" text-lg text-[#FF3811] font-bold"
            >
              Price : $20.00
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="flex justify-center my-12 "><Button className="border border-[#FF3811] text-[#FF3811] capitalize text-lg"  variant="outlined">More Services</Button></div>
    </div>
  );
};
export default Service;
