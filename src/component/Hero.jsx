import DetailComp from "./DetailComp.jsx";
const Hero = () => {
  return (
    <div className="container-fluid px-lg-5 px-md-2  px-sm-0 text-center d-flex justify-content-center  align-content-center g-4 back">
      <div className="row col-12 ">
        <div className="col-lg-3  col-sm-6 ">
          <DetailComp className=" col-lg-3 col-md-6  " />
        </div>
        <div className="col-lg-3  col-sm-6 ">
          <DetailComp className=" col-lg-3 col-md-6  " />
        </div>
        <div className="col-lg-3  col-sm-6 ">
          <DetailComp className=" col-lg-3 col-md-6  " />
        </div>
        <div className="col-lg-3  col-sm-6 ">
          <DetailComp className=" col-lg-3 col-md-6  " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
