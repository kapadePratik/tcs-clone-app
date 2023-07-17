import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { FaFonticons } from "react-icons/fa";
import { image } from "../components/images/nature-image.jpg";
import "../components/Form.css";

// const Form = (form) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <div className="app">
//         <form onSubmit={handleSubmit} autoComplete="off">
//           <h1>Register</h1>
//           <div className="formInput">
//             <span>Email</span>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="formInput">
//             <span>Password</span>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               placeholder="Enter Strong Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       {/* <form
//         class="row g-3 needs-validation mt-5 p-5"
//         novalidate
//         style={{
//           backgroundColor: "#F79C05",
//         }}
//       >
//         <div class="col-md-4">
//           <label for="validationCustom01" class="form-label">
//             First name
//           </label>
//           <input
//             type="text"
//             class="form-control"
//             id="validationCustom01"
//             value="Mark"
//             required
//           />
//           <div class="valid-feedback">Looks good!</div>
//         </div>
//         <div class="col-md-4">
//           <label for="validationCustom02" class="form-label">
//             Last name
//           </label>
//           <input
//             type="text"
//             class="form-control"
//             id="validationCustom02"
//             value="Otto"
//             required
//           />
//           <div class="valid-feedback">Looks good!</div>
//         </div>
//         <div class="col-md-4">
//           <label for="validationCustomUsername" class="form-label">
//             Username
//           </label>
//           <div class="input-group has-validation">
//             <span class="input-group-text" id="inputGroupPrepend">
//               @
//             </span>
//             <input
//               type="text"
//               class="form-control"
//               id="validationCustomUsername"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <div class="invalid-feedback">Please choose a username.</div>
//           </div>
//         </div>
//         <div class="col-md-6">
//           <label for="validationCustom03" class="form-label">
//             City
//           </label>
//           <input
//             type="text"
//             class="form-control"
//             id="validationCustom03"
//             required
//           />
//           <div class="invalid-feedback">Please provide a valid city.</div>
//         </div>
//         <div class="col-md-3">
//           <label for="validationCustom04" class="form-label">
//             State
//           </label>
//           <select class="form-select" id="validationCustom04" required>
//             <option selected disabled value="">
//               Choose...
//             </option>
//             <option>...</option>
//           </select>
//           <div class="invalid-feedback">Please select a valid state.</div>
//         </div>
//         <div class="col-md-3">
//           <label for="validationCustom05" class="form-label">
//             Zip
//           </label>
//           <input
//             type="text"
//             class="form-control"
//             id="validationCustom05"
//             required
//           />
//           <div class="invalid-feedback">Please provide a valid zip.</div>
//         </div>
//         <div class="col-12">
//           <div class="form-check">
//             <input
//               class="form-check-input"
//               type="checkbox"
//               value=""
//               id="invalidCheck"
//               required
//             />
//             <label class="form-check-label" for="invalidCheck">
//               Agree to terms and conditions
//             </label>
//             <div class="invalid-feedback">
//               You must agree before submitting.
//             </div>
//           </div>
//         </div>
//         <div class="col-12">
//           <button class="btn btn-primary text-center" type="submit">
//             Submit form
//           </button>
//         </div>
//       </form> */}
//     </>
//   );
// };

const Form = (form) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) =>
    alert(values.email + "" + values.password + "" + values.contact);

  return (
    <>
      <div className="bg-image">
        <div className="container p-5 card">
          <div className="mt-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="register-text">
                <h1>Register</h1>
              </div>

              <div>
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
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
                <label className="d-block">Password</label>
                <input
                  className="form-control"
                  type="password"
                  {...register("password", {
                    required: "Required",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,8}$/,
                      message:
                        "Password requirements: 1-8 characters, 1 number, 1 letter, 1 symbol.",
                    },
                  })}
                />
                <br />
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {errors.password && errors.password.message}
                </span>
              </div>

              <div>
                <label className="d-block">Contact</label>
                <input
                  className="form-control"
                  type="number"
                  contact
                  {...register("contact", {
                    required: "Required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Number requirements: 10 Digits to complete.",
                    },
                  })}
                />
                <br />
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {errors.contact && errors.contact.message}
                </span>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary btn-block mt-3"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
