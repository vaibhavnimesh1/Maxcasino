import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SignUp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center signin m-4 ">
      <form className="p-4 rounded-3 position-relative  ">
        <h3 className="p-0 ">Register Here</h3><Link to="/" className="mark rounded-3 "><i className="fa-solid rounded-3  fa-xmark "></i></Link>
        <div className="mb-3">
          <label htmlFor="name" className="form-label float-start">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label float-start"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label float-start"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <p>
          <Link to="/signIn"> Already have an account? Login!!!</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
