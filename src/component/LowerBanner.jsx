import React from "react";

const LowerBanner = ({ title }) => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column py-md-4   px-lg-5  p-0    ">
      <div className="heading d-flex justify-content-between w-100 px-3 mb-2 ">
        <h3 className="p-0  text-light fw-bolder ">{title}</h3>
        <span className="d-flex gap-3 align-items-center card-list-btn ">
          <button className=" px-4 ">All</button>
          <button>
            <i className="fa-solid fa-arrow-left px-2 fir "></i>
          </button>
          <button>
            <i className="fa-solid fa-arrow-right px-2 last"></i>
          </button>
        </span>
      </div>

      <div className="container-fluid  row col-12  d-flex justify-content-evenly align-items-center mb-4 p-0    ">
        <div className="col-lg-3 single-card col-md-4 col-sm-4 ">
          <img
            src="https://s3-alpha-sig.figma.com/img/ae8d/4ce1/1427d2ccf12817568cabd96e4e5d3b07?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O0fIQJ3HtpTcYvvWxDsnlbuX2Bgsh2X7rtWavCHd6W1lV0oKzFEH5mbQYrUNcPlql72NatOMooNSHKXXnXSLxJi8bP3HFWfKgaNFxdmGDNLphyBLVGYvlwaHuiY9gtE0yO7dDiw7Fk-yFWboavkvd1McAo8b9QrmWSCyOshVDcugqnFyPazvUc8Q-0RzX-bvSDv0UWqZmoe-S7Mylt2zKfDg17ujudfcbIYLwGhx1fTU9YO9IspbSbj8Vw3yEg-pjkBhBHaQbjMCRQhu~5nzO0ewyv59Ojq3Ae0NnSx31bzcvXLl3CN~q54AHqrEZv8IpBKBXNfhRQ8OMOHn4KycrQ__"
            alt=""
          />
        </div>
        <div className="col-lg-3 single-card col-md-4 col-sm-4">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/3fe6/827a/6acf31aaee1ca094d95534a427aa9aa9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=noCP5sCbCwoVPrg7KNr7cR~hW1nV9DhAxw1b4uxQeToOh2Q6W5hpiiE9SyeFVYrKsjZD9O7K2Mlq0YD4WlK46M6oo7rDczhwXcgoDZ9tluOvkz1iHcjgxXhTfmIJYP4uqu0jR30WbxJaRTBkAWkmsWv2lG6VoU7b0RjLMzI0HYYB1pbSMFG~HtaYW8kvipteCm9wpBp1-wmgs-TrbMOQQhad6NzRpRDcYPu85jYNghjkmYMexj5xugd7s2WOO7CQLYQI8ukUVsjQlMZSkrO6bBXGiAFz5LbeRDRaX774O~-ivEszoJjZRuaNLJjjRRasOJ2DEfECD1qnDcwcdCk6~A__"
          />
        </div>
        <div className="col-lg-3 single-card col-md-4 col-sm-4 ">
          <img
            src="https://s3-alpha-sig.figma.com/img/ae8d/4ce1/1427d2ccf12817568cabd96e4e5d3b07?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O0fIQJ3HtpTcYvvWxDsnlbuX2Bgsh2X7rtWavCHd6W1lV0oKzFEH5mbQYrUNcPlql72NatOMooNSHKXXnXSLxJi8bP3HFWfKgaNFxdmGDNLphyBLVGYvlwaHuiY9gtE0yO7dDiw7Fk-yFWboavkvd1McAo8b9QrmWSCyOshVDcugqnFyPazvUc8Q-0RzX-bvSDv0UWqZmoe-S7Mylt2zKfDg17ujudfcbIYLwGhx1fTU9YO9IspbSbj8Vw3yEg-pjkBhBHaQbjMCRQhu~5nzO0ewyv59Ojq3Ae0NnSx31bzcvXLl3CN~q54AHqrEZv8IpBKBXNfhRQ8OMOHn4KycrQ__"
            alt=""
          />
        </div>
        <div className="col-lg-3 single-card col-md-4 col-sm-4">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/3fe6/827a/6acf31aaee1ca094d95534a427aa9aa9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=noCP5sCbCwoVPrg7KNr7cR~hW1nV9DhAxw1b4uxQeToOh2Q6W5hpiiE9SyeFVYrKsjZD9O7K2Mlq0YD4WlK46M6oo7rDczhwXcgoDZ9tluOvkz1iHcjgxXhTfmIJYP4uqu0jR30WbxJaRTBkAWkmsWv2lG6VoU7b0RjLMzI0HYYB1pbSMFG~HtaYW8kvipteCm9wpBp1-wmgs-TrbMOQQhad6NzRpRDcYPu85jYNghjkmYMexj5xugd7s2WOO7CQLYQI8ukUVsjQlMZSkrO6bBXGiAFz5LbeRDRaX774O~-ivEszoJjZRuaNLJjjRRasOJ2DEfECD1qnDcwcdCk6~A__"
          />
        </div>
      </div>
    </div>
  );
};

export default LowerBanner;
