import React from "react";
import "./style.css";
import banner1 from "../../assets/images/bannner1.jpeg";
import banner2 from "../../assets/images/bannner2.jpeg";
import banner3 from "../../assets/images/bannner3.jpeg";

const Banners = () => {
  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img src={banner1} alt="banner1" className="w-100 transition" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img src={banner2} alt="banner2" className="w-100 transition" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img src={banner3} alt="banner3" className="w-100 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
