import React from "react";
import "../Home/style.css";
import HomeSlider from "./slick-slider";
import CatSlider from "../../components/catSlider";
import Banners from "../../components/banners";
import Product from "../../components/product";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banners />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor">All</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Milks & Dairies</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Coffees & Teas</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Pet Foods</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Meats</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Vegetables</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Fruits</a>
              </li>
            </ul>
          </div>

          <div className="productRow">
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product />
            </div>

            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
