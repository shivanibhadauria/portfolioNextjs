import React, { PropsWithChildren } from "react";
import { Transform } from "stream";
import { twMerge } from "tailwind-merge";

const Orbit = ({
  children,
  size,
  rotation,
  shouldspin = false,
  spinduration,
  shouldorbit = false,
  orbitduration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldspin?: boolean;
  spinduration?: string;
  shouldorbit?: boolean;
  orbitduration?: string;
}>) => {
  return (
    <div className=" top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2  ">
      <div
        className={twMerge(shouldorbit == true && " animate-spin ")}
        style={{ animationDuration: orbitduration }}
      >
        <div
          className="flex items-start justify-start   "
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldspin == true && " animate-spin ")}
            style={{ animationDuration: spinduration }}
          >
            <div
              className="  inline-flex "
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orbit;
