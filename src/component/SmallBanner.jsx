import "../App.css";

const SmallBanner = () => {
  return (
  
      <div className="container-fluid px-lg-5 px-md-2  px-sm-0 text-center d-flex justify-content-center align-items-center mb-2  ">
        <div className="row d-flex justify-content-evenly  col-12 ">
          <div className="col-lg-6 mb-sm-4     ">
            <div className=" small-banner  back-img d-flex justify-content-end flex-column  ">
              <h3 className="text-light "> Casino</h3>
              <p  className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                labore.
              </p>
              <div className="small-btn d-flex  justify-content-evenly mb-3
                ">
                <button className="button text-light mt-4 text-light btn-fir col-5 ">
                Casion
                </button>
                <button className="button text-light mt-4 text-light btn-sec col-5">
                  Live Casion
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-sm-4     ">
            <div className=" small-banner  back-img d-flex justify-content-end flex-column  ">
              <h3 className="text-light "> Casino</h3>
              <p  className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                labore.
              </p>
              <div className="small-btn d-flex  justify-content-evenly mb-3
                ">
                <button className="button text-light mt-4 text-light btn-fir col-5 ">
                Casino
                </button>
                <button className="button text-light mt-4 text-light btn-sec col-5">
                  Live Casino
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
  );
};

export default SmallBanner;
