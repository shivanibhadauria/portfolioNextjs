import ArrowRight from "../assets/icons/arrow-up-right.svg";
import GrainImage from "../assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 ">
      <div className="container">
        <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 py-8 px-10 text-gray-950 text-center md:text-left rounded-3xl relative z-0 ">
          <div
            className=" absolute inset-0 -z-10 opacity-5 "
            style={{ backgroundImage: `url(${GrainImage.src})` }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className=" font-serif text-2xl md:text-3xl ">
                Let's create something amaizing
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>

            <div>
              <button className=" inline-flex bg-gray-900 items-center text-white px-6 h-12 rounded-xl w-max gap-2 border border-gray-900 ">
                <span className=" font-semibold  ">Contact Me</span>{" "}
                <ArrowRight className="size-4" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
