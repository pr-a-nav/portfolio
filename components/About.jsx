import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="p-10 pt-24">
      <div className="text-white">
        <span className="primary-color">01.</span> &nbsp;
        <span className="bright-white text-2xl font-semibold"> About me</span>
        <hr className="hr-color max-w-xs" />
      </div>

      <div className="mt-10 dull-white">
        <p>
          Hello! My name is Pranav and I enjoy exploring and creating things
          that live on the internet or in programming world. My interest is in
          <span className="primary-color"> development</span> ,
          <span className="primary-color"> machine learning</span>, sometimes I
          explore the <span className="primary-color"> pentesting</span> world
          and the
          <span className="primary-color"> quantum</span> world which belongs to
          <span className="primary-color"> physics</span>.
        </p>
      </div>
      <div className="flex justify-center w-full items-center">
        <div className="border-2 w-36 h-36 rounded-full ml-10 mt-7 primary-border"></div>
        <div className="z-40 absolute flex">
          <Image
            src="/profile-pic.jpeg"
            height={150}
            width={150}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
