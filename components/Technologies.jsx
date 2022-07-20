import React from "react";

const Technologies = () => {
  return (
    <div id="techno" className="mt-10 p-10">
      <div className="text-white">
        <span className="primary-color">02.</span> &nbsp;
        <span className="bright-white text-2xl font-semibold">
          Technologies
        </span>
        <hr className="hr-color max-w-xs" />
      </div>

      <div className="dull-white mt-10">
        <p>Here are the few technologies I've explored-</p>
        <div className="inline-flex justify-between w-full p-5">
          <div>
            <ul className="list-disc">
              <li>Django</li>
              <li>Pandas</li>
              <li>C++</li>
              <li>Matplotlib</li>
              <li>Keras</li>
              <li>SKLearn</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Rust</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <a href="https://www.djangoproject.com/">
          <img
            src="/django-logo.png"
            className="hover:animate-bounce h-11 w-11"
          ></img>
        </a>

        <a href="https://cplusplus.com/">
          <img
            src="/cpp-logo.png"
            className="hover:animate-bounce h-11 w-11"
          ></img>
        </a>

        <a href="https://html.com/">
          <img
            src="/html-logo.png"
            className="hover:animate-bounce h-11 w-11"
          ></img>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <img
            src="/css-logo.png"
            className="hover:animate-bounce h-11 w-11"
          ></img>
        </a>
        <a href="https://www.javascript.com/">
          <img
            src="/js-logo.png"
            className="hover:animate-bounce h-11 w-11"
          ></img>
        </a>
        <a href="https://nodejs.org/en/">
          <img
            src="/node-js-logo.png"
            className="hover:animate-bounce h-11 w-11"
          ></img>
        </a>
        <a href="https://reactjs.org/">
          <img
            src="/reactjs-logo.png"
            className="hover:animate-bounce h-11 w-11"
          ></img>
        </a>
        <a href="https://www.rust-lang.org/">
          <img
            src="/rust-logo.png"
            className="hover:animate-bounce h-11 w-11"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Technologies;
