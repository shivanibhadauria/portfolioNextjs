import Image from "next/image";
import mememojiImage from "../assets/images/memoji-computer.png";
import Arrowdown from "../assets/icons/arrow-down.svg";
import grain from "../assets/images/grain.jpg";
import Star from "../assets/icons/star.svg";
import Sparkle from "../assets/icons/sparkle.svg";
import Orbit from "../components/Orbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md-py-48 lg:py-60 relative z-0 ">
      <div
        className=" absolute  inset-0 -z-30  opacity-5  "
        style={{ backgroundImage: `url(${grain.src})` }}
      ></div>
      <div className=" size-[620px]  hero-ring "> </div>
      <div className=" size-[820px]  hero-ring "> </div>
      <div className=" size-[1020px]  hero-ring "> </div>
      <div className=" size-[1220px]  hero-ring "> </div>

      <Orbit size={800} rotation={-72}>
        <Star className=" text-emerald-300 size-28  " />
      </Orbit>
      <Orbit size={550} rotation={20}>
        <Star className=" text-emerald-300 size-12  " />
      </Orbit>
      <Orbit size={590} rotation={98}>
        <Star className=" text-emerald-300 size-8  " />
      </Orbit>
      <Orbit size={430} rotation={-14}>
        <Sparkle className=" text-emerald-300/20 size-5  " />
      </Orbit>

      <Orbit size={530} rotation={178}>
        <Sparkle className=" text-emerald-300/20 size-10  " />
      </Orbit>
      <Orbit size={710} rotation={114}>
        <Sparkle className=" text-emerald-300/20 size-14  " />
      </Orbit>
      <Orbit size={720} rotation={85}>
        <div className=" bg-emerald-300/20 size-3 rounded-full  "></div>
      </Orbit>
      <Orbit size={520} rotation={-41}>
        <div className=" bg-emerald-300/20 size-2 rounded-full  "></div>
      </Orbit>
      <Orbit size={650} rotation={-5}>
        <div className=" bg-emerald-300/20 size-2 rounded-full  "></div>
      </Orbit>

      <div className="container">
        <div className=" flex flex-col items-center">
          <Image className="size-[100px]  " src={mememojiImage} alt="memoji" />
          <div className=" bg-gray-950 flex  items-center justify-center gap-4 py-1.5 px-4 rounded-md border-gray-800 border ">
            <div className=" bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium ">
              Available for new projects
            </div>
          </div>

          <div className=" max-w-lg mx-auto ">
            <h1 className=" text-white font-serif text-3xl md:text-5xl  mt-8 tracking-wide  text-center   ">
              Building Exceptional User Experiences
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg ">
              I specialize in transforming design into functional,
              high-performing web applications. Lets discuss your next project
            </p>
          </div>

          <div className="flex max-md:flex-col mt-4 gap-4 items-center">
            <button className=" border-white/15 border  rounded-xl inline-flex items-center gap-2   h-12 px-6 ">
              <span className="font-semibold">Explore my work</span>
              <Arrowdown className="size-4  " />
            </button>
            <button className="border-white/15 border  bg-white text-gray-900  rounded-xl h-12 px-6 inline-flex items-center gap-2  ">
              <span> 👋 </span>
              <span className="font-semibold">Lets connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
