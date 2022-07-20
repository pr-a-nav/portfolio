import React from "react";

const SidebarProps = ({ index, title }) => {
  return (
    <div className="flex flex-col justify-center p-7 text-lg">
      <div className="flex justify-center">
        <p className="primary-color">{index}</p>
      </div>
      <div className="flex justify-center">
        <p className="dull-white cursor-pointer hover-primary-color">{title}</p>
      </div>
    </div>
  );
};

export default SidebarProps;
