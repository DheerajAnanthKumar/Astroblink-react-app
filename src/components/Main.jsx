import React from "react";

const Main = ({ data }) => {
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data.title || "bg-img"} className="bg-img" />
    </div>
  );
};

export default Main;
