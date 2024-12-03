/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import BuyNowButton from "./BuyNowButton";

const NewArrivalProductCard = ({ name, description, price, image }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <Card className="h-full bg-white text-secondary dark:bg-black dark:text-primary overflow-hidden cursor-pointer group transition-all duration-300 ss:mx-4 mx-2">
        {/* CardHeader with responsive button display */}
        <CardHeader floated={false} className="relative h-56">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
          />
          {/* Button is visible by default on mobile and tablet, with hover effect on desktop */}
          <div className="absolute inset-0 flex items-center justify-center bg-black ss:bg-opacity-0 xx:bg-opacity-50 opacity-100 transition-all duration-300 group-hover:bg-opacity-50 group-hover:opacity-100 xx:opacity-100 ss:opacity-0">
            <BuyNowButton name={name} price={price} image={image} />
          </div>
        </CardHeader>

        <CardBody>
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography className="mb-2">{description}</Typography>
          <Typography variant="h6" className="text-accent">
            N{price.toFixed(2)}k
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default NewArrivalProductCard;
