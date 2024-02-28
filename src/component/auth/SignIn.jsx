import { Link } from "react-router-dom";
import "./style.css";

const SignIn = () => {
  return (
    <div className="d-flex  justify-content-center  align-items-center signin ">
      <form className="p-4  rounded-3   position-relative  ">
        <h3 className="p-0 "> Login </h3><Link to="/" className="mark rounded-3 "><i className="fa-solid rounded-3  fa-xmark "></i></Link>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label float-start "
          >
            {" "}
            Email address
          </label>
          <input
            required
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label
            required
            htmlFor="exampleInputPassword1"
            className="form-label float-start"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <p className="mt-4 text-light  ">
          <Link to="/signUp" className="  ">
            Already User ? Login !!!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
