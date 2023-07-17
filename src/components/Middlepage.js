import React from "react";
import Header from "./Header";

const Middlepage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="text-center">
          <h3>Introduce Your Product</h3>

          <h3>Quickly & Effectively</h3>
          <br />

          <p>
            The optional data-bs-offset attribute specifies the number of pixels
            to offset from top when calculating the position of scroll.
            <br /> This is useful when you feel that the links inside the navbar
            changes the active state too soon or too early when jumping <br />{" "}
            to the scrollable elements. Default is 10 pixels.
          </p>
          <button
            className="btn "
            style={{
              color: "white",
              backgroundColor: "#FF5733",
              width: 150,
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Middlepage;
