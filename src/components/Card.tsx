import React, { ComponentPropsWithRef, PropsWithChildren } from "react";
import Grainimage from "../assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={twMerge(
        " bg-gray-800 rounded-3xl z-0  relative after:content-[''] after:absolute after:inset-0 after:z-10 overflow-hidden  after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20   after:pointer-events-none",
        className
      )}
      {...other}
    >
      <div
        className=" absolute -z-10 opacity-5 inset-0"
        style={{ backgroundImage: `url(${Grainimage.src})` }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
