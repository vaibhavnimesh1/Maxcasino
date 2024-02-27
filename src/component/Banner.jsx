import "../App.css";

const Banner = () => {
  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="row d-flex justify-content-start">
          <div className="col text-center  ">
            <div className=" left-banner  text-center  ">
              <h3 className="text-light p-0  "> SIGN UP & GET REWARD</h3>
              <h2 className="mt-4 ">
                <span className="white">UP TO</span>
                <span className="green"> $ 20,000</span>
              </h2>
              <button className="button text-light mt-4 mb-4 ">
                Create Account
              </button>
            </div>
          </div>
          <div className="col image">
            <img
              src="https://images.pexels.com/photos/3618529/pexels-photo-3618529.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
