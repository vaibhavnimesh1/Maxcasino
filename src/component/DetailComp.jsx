import React from "react";
import "../App.css";

const DetailComp = () => {
  return (
    <div className="detailcomp p-3 rounded-2 mt-3 mb-3 ">
      <ul className=" p-0  gap-4">
        <li className="d-flex nowrap justify-content-between text-light  ">
          <span>
            <i className="fa-solid fa-football mx-1 "></i>premier league{" "}
          </span>
          <span>
            <i className="fa-solid fa-football mx-1 "></i>Feb 2, 00:00
          </span>
        </li>
        <li className="d-flex nowrap justify-content-between text-light  center ">
          <span className=" text-white ">
            {" "}
            <div className="">
              <img
                className="image "
                src="https://images.pexels.com/photos/19436350/pexels-photo-19436350/free-photo-of-close-up-of-a-soccer-ball-in-the-goal.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>{" "}
            Chealsea
          </span>
          <span className=" text-white fw-bolder  ">Vs</span>
          <span className=" text-white ">
            {" "}
            <div>
              <img
                className="image "
                src="https://images.pexels.com/photos/19436350/pexels-photo-19436350/free-photo-of-close-up-of-a-soccer-ball-in-the-goal.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>{" "}
            Liverpool
          </span>
        </li>
        <li className="d-flex nowrap justify-content-between   ">
          <span>
            {" "}
            <button className=" text-white ">
              {" "}
              <span>1</span>1.87
            </button>
          </span>
          <span className=" text-white ">
            {" "}
            <button className=" text-white ">
              {" "}
              <span>X</span>1.87
            </button>
          </span>
          <span className=" text-white ">
            {" "}
            <button className=" text-white ">
              {" "}
              <span>2</span>1.87
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailComp;
