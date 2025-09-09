"use client";

import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Bookimage from "../assets/images/book-cover.png";
import Image from "next/image";
import HtmlIcon from "../assets/icons/html5.svg";
import CssIcon from "../assets/icons/css3.svg";
import ReactIcon from "../assets/icons/react.svg";
import ChromIcon from "../assets/icons/chrome.svg";
import Github from "../assets/icons/github.svg";
import js from "../assets/icons/js.svg";
import tailwind from "../assets/icons/tailwind.svg";
import nextjs from "../assets/icons/nextjs.svg";
import nodejs from "../assets/icons/nodejs.svg";
import mongodb from "../assets/icons/mongodb.svg";
import me from "../assets/images/me.png";
import Map from "../assets/images/map.png";
import SmileImage from "../assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import Toolboxitem from "@/components/Toolboxitem";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: js,
  },
  {
    title: "HTML",
    iconType: HtmlIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "Tailwind",
    iconType: tailwind,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: nextjs ,
  },
  {
    title: "Node.js",
    iconType: nodejs,
  },
  {
    title: "MongoDB",
    iconType: mongodb,

  }
];

const hobbies = [
  {
    title: "Traveling",
    emoji: "✈️",
    left: "50%",
    right: "50%",
  },
  {
    title: "Music",
    emoji: "🎸",
    left: "20%",
    right: "30%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "40%",
    right: "80%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    right: "20%",
  },
  {
    title: "Nature",
    emoji: "🌳",
    left: "70%",
    right: "40%",
  },

  {
    title: "Billiards",
    emoji: "🎱",
    left: "50%",
  }
];

export const AboutSection = () => {
  const dragConstaints = useRef(null);

  return (
    <div id="about-me" className="py-20   lg:py-28 ">
      <div className="container">
        <div>
          <SectionHeader
            eyebrow="AboutMe"
            title="A glimpse Into My World"
            description=" Learn more about who I am and what I do , and what insprires me. "
          />

          <div className=" mt-20 flex  flex-col gap-8 ">
            <div className="grid grid-cols-1 gap-8  md:grid-cols-5 lg:grid-cols-3 md:gap-8 ">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
                <CardHeader
                  title="My Reads"
                  description="Explore the book shaping my perspectives."
                />

                <div className=" w-40 mx-auto mt-2 ">
                  <Image src={Bookimage} alt="book" className="    " />
                </div>
              </Card>

              <Card className=" h-[320px] p-0  md:col-span-3 lg:col-span-2 ">
                <CardHeader
                  title="My Toolbox"
                  description=" Explore the technologies and tools I use to craft exceptional
                  digital experiences."
                  className="px-6 pt-6"
                />

                <Toolboxitem
                  toolboxItems={toolboxItems}
                  className=""
                  itemWrapperClassname="animate-move-left"
                />
                <Toolboxitem
                  toolboxItems={toolboxItems}
                  className="mt-6"
                  itemWrapperClassname="animate-move-right [animation-duration:15s] "
                />
              </Card>
            </div>

            <div className=" grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-8 ">
              <Card className=" h-[320px]  flex flex-col md:col-span-3 lg:col-span-2  ">
                <CardHeader
                  title="Beyond the Code"
                  description="  Explore my interests and hobbies beyond the digital realm."
                  className=""
                />

                <div className="relative flex-1 " ref={dragConstaints}>
                  {hobbies.map((item, index) => (
                    <motion.div
                      drag
                      dragConstraints={dragConstaints}
                      className=" absolute inline-flex  items-center gap-2 px-6 pt-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full  "
                      key={index}
                      style={{ left: item.left, top: item.right }}
                    >
                      <span className=" font-medium text-gray-950 ">
                        {item.title}
                      </span>
                      <span>{item.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              <Card className=" h-[320px] p-0 relative md:col-span-2 lg:col-span-1  ">
                <Image
                  src={Map}
                  alt="map"
                  className=" h-full w-full object-cover object-left-top "
                />

                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full  after:content-[''] after:absolute   after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30  ">
                  <div className=" absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s] "></div>
                  <div className=" absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 "></div>
                  <Image src={me} alt="smile" className="size-20 rounded-full" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
