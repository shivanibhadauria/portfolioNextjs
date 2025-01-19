import React, { ElementType, Fragment } from "react";
import Techicon from "@/components/Techicon";
import { twMerge } from "tailwind-merge";

const Toolboxitem = ({
  toolboxItems,
  className,
  itemWrapperClassname,
}: {
  toolboxItems: {
    title: string;
    iconType: ElementType;
  }[];
  className?: string;
  itemWrapperClassname?: string;
}) => {
  return (
    <div
      className={twMerge("flex mask-image-linear-gradient-right", className)}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6  ",
          itemWrapperClassname
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolboxItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg "
              >
                <Techicon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Toolboxitem;
