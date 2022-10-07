import React from "react";

const Quality = ({ quality }) => {
  const { name, color } = quality;
  return <span className={"badge m-1 bg-" + color}>{name}</span>;
};

export default Quality;
