import ArrowRightUp from "@/assets/icons/arrow-up-right.svg";

const Navlinks = [
  {
    name: "YouTube",
    link: "#",
  },
  {
    name: "Twitter",
    link: "#",
  },
  {
    name: "Instagram",
    link: "#",
  },
  {
    name: "LinkdIn",
    link: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip ">
      <div className=" -z-10 absolute h-[400px] w-[1600px] bottom-0  bg-emerald-300/30 left-1/2 -translate-x-1/2 mask-image-radial-gradient-top "></div>
      <div className="container">
        <div className="border-t  border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between  items-center gap-8">
          <div className=" text-white/40 ">
            &copy; 2025. Alll right reserved.
          </div>

          <nav className=" flex flex-col md:flex-row items-center gap-8">
            {Navlinks.map((item) => (
              <a
                className=" inline-flex items-center gap-1.5 "
                href="#"
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
