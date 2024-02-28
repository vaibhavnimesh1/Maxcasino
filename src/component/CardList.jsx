import "../App.css";
import Card from "./Card.jsx";
const CardList = ({ title }) => {
  return (
    <div className="container-fluid  d-flex justify-content-center align-items-center flex-column py-md-4  px-lg-5  p-0   ">
      <div className="heading d-flex justify-content-between w-100 px-3 mb-2  px-md-4 px-sm-4 ">
        <h3 className="p-0  text-light fw-bolder ">{title}</h3>
        <span className="d-flex gap-3 align-items-center card-list-btn all-btn ">
          <button className=" px-lg-4 px-md-2 ">All</button>
          <button>
            <i className="fa-solid fa-arrow-left px-2 fir "></i>
          </button>
          <button>
            <i className="fa-solid fa-arrow-right px-2 last"></i>
          </button>
        </span>
      </div>

      <Card />
    </div>
  );
};

export default CardList;
