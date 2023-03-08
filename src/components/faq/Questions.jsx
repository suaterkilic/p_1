import React from "react";

const Questions = (props) => {
  return (
    <>
      <div className="faq-item">{props?.title}</div>
      <div className="faq-content">{props?.description}</div>
    </>
  );
};

export default Questions;
