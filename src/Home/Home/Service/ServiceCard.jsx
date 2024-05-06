import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, title, price, _id } = service;
  return (
    <div>
      <div>
        <Card className="shadow-none border">
          <CardHeader floated={false} className="h-60 shadow-none">
            <img src={img} alt="gallery-photo" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <div className="flex justify-between text-lg text-[#FF3811] font-bold">
              <p>{price}</p>
              <Link to={`/checkout/${_id}`}>
                <FaArrowRight className="text-[#FF3811] text-xl"></FaArrowRight>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ServiceCard;
