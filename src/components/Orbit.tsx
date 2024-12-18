import React, { PropsWithChildren } from "react";
import { Transform } from "stream";

const Orbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className=" top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2  ">
      <div
        className="flex items-start justify-start   "
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="  inline-flex "
          style={{ transform: `rotate(${rotation * -1}deg)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Orbit;
