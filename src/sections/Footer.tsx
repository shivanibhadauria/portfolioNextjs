import ArrowRightUp from "@/assets/icons/arrow-up-right.svg";
import { link } from "fs";

const Navlinks = [
  {
    name: "Github",
    link: "https://github.com/shivanibhadauria",
  },
  {
    name: "Linkdin",
    link: "https://www.linkedin.com/in/shivanibhadauria37/",
  }
  ,
  {
    name: "Resume",
    link: "/Shivani-resume.pdf"
  }
 
];

export const Footer = () => {
  return (
    <footer className="relative  overflow-x-clip ">
      <div className=" -z-10 absolute h-[400px] w-[1600px] bottom-0  bg-emerald-300/30 left-1/2 -translate-x-1/2 mask-image-radial-gradient-top "></div>
      <div className="container">
        <div className="border-t  border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between  items-center gap-8">
          <div className=" text-white/40 ">
            &copy; 2025. All right reserved.
          </div>

          <nav className=" flex flex-col md:flex-row items-center gap-8">
            {Navlinks.map((item) => (
              <a
                className=" inline-flex items-center gap-1.5 z-30 "
                href={item.link}
                key={item.name}
              >
                <span className=" font-semibold ">{item.name} </span>
                <ArrowRightUp className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
