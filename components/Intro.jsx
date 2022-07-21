import React from "react";

const Intro = () => {
  return (
    <div className="mt-10 lg:flex lg:justify-center">
      <div className="p-10 space-y-3 lg:max-w-5xl lg:space-y-5">
        <p className="primary-color text-lg lg:text-xl">
          Hi! <br /> My name is
        </p>
        <p className="bright-white text-5xl font-semibold lg:text-7xl">
          Pranav Mishra.
        </p>
        <p className="dull-white text-3xl font-semibold lg:text-5xl">
          I'm a programmer and a physics enthusiast.
        </p>
        <p className="dull-white lg:text-lg lg:max-w-2xl">
          I am a programmer, specializing in python and C++ and I've been
          working mostly over the backend of any application. And I am a physics
          student also so I spend my time in quantum world as well.
        </p>
      </div>
    </div>
  );
};

export default Intro;
