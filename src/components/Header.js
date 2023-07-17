import React from "react";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-body-tertiary  ">
        <div class="container">
          <a class="navbar-brand " href="#">
            {/* <img 
            src= {require("../components/images/Logo.png")}
             alt=""
             style={{
              width:"5%",
              height:"50vh",
             }}
             
             /> */}{" "}
            LOGO
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link  " href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Mission
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
            </ul>

            <button
              class="btn"
              type="submit"
              style={{
                color: "white",
                backgroundColor: "#FF5733 ",
              }}
            >
              contest
            </button>
          </div>
        </div>
      </nav>

      {/* <ul
        class="nav justify-content-end"
        style={{
          backgroundColor: "black",
        }}
      >
        <li class="nav-item">
          <a
            class="nav-link active text-secondary-emphasis"
            aria-current="page"
            href="#"
          >
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary-emphasis" href="#">
            Mission
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary-emphasis" href="#">
            Product
          </a>
        </li>
        <button
          class="btn"
          type="submit"
          style={{
            color: "white",
            backgroundColor: "#FF5733 ",
            width: 150,
            cursor: "pointer",
          }}
        >
          contest
        </button>
      </ul> */}
    </>
  );
};
export default Header;
