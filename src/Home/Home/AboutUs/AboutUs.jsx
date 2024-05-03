import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import about1 from "../../../assets/images/about_us/person.jpg";
import about2 from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Card className="w-full  flex-row h-[550px] mt-12 shadow-none gap-12 my-24">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 md:w-[460px] md:h-[473px] shrink-0 relative w-1/2"
      >
        <img
          src={about1}
          alt="card-image"
          className=" w-[80%] h-4/5 rounded-lg"
        />
        <img
          src={about2}
          alt="card-image"
          className=" md:w-[327px] md:h-[332px]  absolute right-8 top-1/3 border-8 border-[#FFFFFF]"
        />
      </CardHeader>
      <CardBody className="w-1/2">
        <Typography className="mb-4 uppercase text-xl text-[#FF3811]">
          About Us
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-8 text-5xl font-bold"
        >
          We are qualified & of experience in this field
        </Typography>
        <Typography color="gray" className="mb-10 ">
          <small>
            {" "}
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </small>
        </Typography>
        <Typography color="gray" className="mb-12 ">
          <small>
            {" "}
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don not look even slightly
            believable.
          </small>
        </Typography>
        <Link to="#" className="inline-block">
          <Button className="bg-[#FF3811] text-white font-semibold py-4 text-base capitalize">
            Get More Info
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};
export default AboutUs;
