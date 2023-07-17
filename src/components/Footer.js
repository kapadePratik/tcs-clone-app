import React from "react";
import Header from "./Header";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid "
        style={{
          backgroundColor: "#EEF6FE",
        }}
      >
        <div className=" row g-0">
          <div className="col-4">
            <div>
              <h5 className="mt-5">CONTACT</h5>
              <br />
              <span>Tell us Everything</span>
              <br />
              <span>
                IF you have any query about this get back FAQ section <br />
                write problem we will back to you{" "}
              </span>
              <br />
              <u className="mb-3">Let's Chat</u>
            </div>
          </div>
          <div className="col-4">
            <h5 className="mt-5">POLICY</h5>
            <span>Application Securities</span>
            <br />
            <span>Software Securities</span>
          </div>

          <div className="col-4">
            <div
              className=""
              style={{
                marginTop: "16%",
              }}
            >
              <ul>
                <li>
                  <a> Support Center </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <h5 className="mt-5">LOCATIONS</h5>

          <span> East California </span>
          <br />
          <span>Lan-fas-co</span>
          <br />
          <span>Texas </span> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
