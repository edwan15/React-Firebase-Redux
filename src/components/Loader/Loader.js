import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <div className=" flex justify-center  inset-x-60 inset-y-60  absolute md:inset-x-1.5  xl:inset-56 xl:mx-96">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    </div>
  );
};

export default Loader;
