import React from "react";
import { Title } from "./ui/text";
import { Link } from "lucide-react";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div>
        <Title>
          Grab UpTo 50% off on <br />
          Selected headphone
        </Title>
        <Link href={"/shop"} className=" bg-shop_dark_green ">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
