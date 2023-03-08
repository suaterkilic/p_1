import React from "react";
import Questions from "./Questions";

const Faq = (props) => {
  return (
    <>
      <section data-aos="fade-down" data-aos-duration="1400" className="faq">
        <h5>
            {props?.title}
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Questions 
                title="What is a Facebook Messenger automation?"
                description="Lorem ipsum dolor sit"
              />
              <Questions 
                title="How can so many automation for chatbot?"
                description="Lorem ipsum dolor sit"
              />
              <Questions 
                title="Why do I need a Instagram automation?"
                description="Lorem ipsum dolor sit"
              />
              <Questions 
                title="Can I create a Messenger and automation?"
                description="Lorem ipsum dolor sit"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
