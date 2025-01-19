import { Fragment } from "react";
import Staricon from "../assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Efficient",
  "Scalable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip ">
      <div className=" bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1 ">
        <div className=" flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left ">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className=" inline-flex gap-4 ">
                    <span className=" uppercase text-gray-900 font-extrabold text-sm ">
                      {word}
                    </span>
                    <Staricon className="size-6 text-gray-900 -rotate-12 " />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
