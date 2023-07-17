import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    alert(values.name + "" + values.email + "");
  };

  return (
    <>
      <div className="container mt-5">
        <div class="row g-0 ">
          <div class="col-6 ">
            <h3>Contact Form</h3>
            <br />

            <p>
              Lorem Ipsum has been the industry's standard dummy <br /> text
              ever since the 1500s, when an unknown printer took a galley <br />
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="col-6">
            <div className="container p-5 ">
              <div className="mt-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label></label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                      {...register("name", {
                        required: "Required",
                        pattern: {
                          value: /^[a-zA-Z ]{2,40}$/,
                          message: "Invalid name",
                        },
                      })}
                    />
                    <br />
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.name && errors.name.message}
                    </span>
                  </div>

                  <div className="mb-5">
                    <label></label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      placeholder="email"
                      {...register("email", {
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid Email Address",
                        },
                      })}
                    />
                    <br />
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.email && errors.email.message}
                    </span>
                  </div>

                  <div>
                    <label></label>
                    <br />
                    <textarea
                      name="bio"
                      cols="30"
                      rows="10"
                      placeholder="Your message"
                      className="form-control"
                    ></textarea>
                  </div>
                </form>
                <div className="d-flex flex-row-reverse">
                  <button
                    className="btn mt-3 "
                    type="submit"
                    style={{
                      color: "white",
                      backgroundColor: "#FF5733",
                      width: 150,
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
