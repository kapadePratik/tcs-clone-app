import React from "react";
import Header from "./Header";

const Rocketsection = () => {
  return (
    <>
      <div className="container mt-5">
        <div class="row g-0 ">
          <div class="col-6 ">
            <h3>Ready made sections</h3>
            <br />

            <p>
              Lorem Ipsum has been the industry's standard dummy <br/> text ever since
              the 1500s, when an unknown printer took a galley  <br/>of type and
              scrambled it to make a type specimen book. 
            </p>
          </div>
          <div class="col-6 ">    
            <div>
            <img
                src={require("../components/images/rocket-launcher.jpg")}
                alt=""
                style={{
                  width: "70%",
                  height: "50vh",
                }}
              />
            </div>
            </div>
        </div>

        <div className="row g-0">
          <div className="col-6">
            <div>
            <img
                src={require("../components/images/graphical-img4.avif")}
                alt=""
                style={{
                  width: "70%",
                  height: "50vh",
                }}
              />
            </div>
          </div>
             <div className="col-6 ">
              <div className="mb-5">
              <h3>
                That's about it!
              </h3>
                 <br/>

                 <p>
                 Lorem Ipsum has been the industry's standard dummy <br/> text ever since
              the 1500s, when an unknown printer took a galley  <br/>of type and
              scrambled it to make a type specimen book. 
                 </p>
             </div>
             </div>
        </div>
      </div>
    </>
  );
};

export default Rocketsection;
