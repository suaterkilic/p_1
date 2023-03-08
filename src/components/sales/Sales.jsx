import React from "react";

const Sales = () => {
  return (
    <>
      <section className="box-two-area">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1400"
              className="col-lg-5 p-0 left justify-content-center"
            >
              <img src="/images/shape1.svg" className="shape" alt="" />
              <h3>Increase big scale instagram more</h3>
              <p>
                More increase product sales, customer engage, generate qualified
                leads, and deliver instant support through doing personalized.
              </p>
              <a href="#" className="btn-sub-text">
                <span>Explore</span>{" "}
                <img src="/images/btn-arrow-right.svg" alt="" />
              </a>
              <div className="links">
                <a href="#">
                  <img src="/images/messenger.png" alt="" />{" "}
                  <span>Get more customers</span>
                </a>
                <a href="#">
                  <img src="/images/twitter3,.svg" alt="" />{" "}
                  <span>Drive your sales</span>
                </a>
                <a href="#">
                  <img src="/images/whatsapp3.svg" alt="" />{" "}
                  <span>Daily automation</span>
                </a>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1400"
              className="col-lg-6 p-0"
            >
              <img src="/images/slide-1.jpg" className="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sales;
