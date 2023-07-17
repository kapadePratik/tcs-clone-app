import React from "react";
import "../Styles/card.css";

const Cardsection = () => {
  return (
    <>
      <div className="container mt-5">
        <div class="row g-0">
          <div class="col-lg-6 col-md-8 ">
            <div>
              <img
                src={require("../components/images/graphical-img3.jpg")}
                alt=""
                style={{
                  width: "100%",
                  height: "50vh",
                }}
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-4 ">
            <div>
              <h3>Light,Fast & Responsive</h3>
              <br />

              <p>
                Add data-bs-spy="scroll" to the element that should be used as
                the scrollable area often this is the element
              </p>
            </div>
            <div className="row">
              <div class="col-lg-6 col-md-4">
                <div>
                  <img
                    src={require("../components/images/book-cartoon.avif")}
                    alt=""
                    style={{
                      width: "20%",
                      height: "10vh",
                    }}
                  />
                </div>
                <h4>Why We ?</h4>
                <br />
                <p>
                  The effective maximum length <br />
                  is less if the value contains multi <br />
                  byte characters. The effective maximum
                </p>
              </div>

              <div class="col-lg-6 col-md-4">
                <div>
                  <img
                    src={require("../components/images/book-cartoon.avif")}
                    alt=""
                    style={{
                      width: "20%",
                      height: "10vh",
                    }}
                  />
                </div>
                <h4> Know more </h4>
                <br />
                <p>
                  The effective maximum length <br />
                  is less if the value contains multi <br />
                  byte characters. The effective maximum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardsection;
