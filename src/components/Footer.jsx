import React from "react";

const Footer = ({ data, handleToggleModal }) => {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data.title}</h2>
        <h1>NASA PROJECT</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};

export default Footer;
