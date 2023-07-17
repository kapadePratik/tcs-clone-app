import React from "react";
import Header from "../components/Header";
import "../Styles/MainPage.css";
import Footer from "../components/Footer";
import Middlepage from "../components/Middlepage";
import Rocketsection from "../components/Rocketsection";
import ContactPage from "../components/ContactPage";
import Cardsection from "../components/Cardsection";
import { Fade } from "react-reveal";

const MainPage = () => {
  return (
    <>
      <Header />

      <div className="container mt-5">
        <div class="row g-0">
          <div class="col-sm-6 col-md-8 ">
            <Fade left>
              <h3>
                Landing page template for
                <br />
                developers & startupss
              </h3>
              <br />
              <p
                style={{
                  color: "85929E ",
                }}
              >
                The following example shows how to create four equal <br />{" "}
                columns starting at tablets and scaling to extra large desk{" "}
                <br /> On mobile phones or screens
              </p>
            </Fade>
            <div className="d-flex ">
              <button
                className="btn"
                style={{
                  color: "white",
                  backgroundColor: "#FF5733 ",
                  width: 150,
                  cursor: "pointer",
                }}
              >
                Explore
              </button>
              <button
                className="btn ms-5 btn-outline-secondary"
                style={{
                  Color: "black",
                  width: 150,
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div id="bg-image"></div>
          </div>
        </div>
      </div>
      <Middlepage />
      <Cardsection />
      <Rocketsection />
      <ContactPage />
      <Footer />
    </>
  );
};
export default MainPage;
