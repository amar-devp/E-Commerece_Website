import React from "react";
import Rating from "@mui/material/Rating";
import "./style.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import Tooltip from "@mui/material/Tooltip";

const Product = (props) => {
  return (
    <div className="productThumb">
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}
      <Link>
        <div className="imgWrapper">
          <img
            className="w-100"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985"
          />

          <div className="overlay transition">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <a className="cursor">
                  <Tooltip title="Add to Wishlist" className="custom-tooltip">
                    <FavoriteBorderOutlinedIcon />
                  </Tooltip>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">
                  <Tooltip title="Compare" className="custom-tooltip">
                    <CompareArrowsOutlinedIcon />
                  </Tooltip>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">
                  <Tooltip title="Quick View" className="custom-tooltip">
                    <VisibilityOutlinedIcon />
                  </Tooltip>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Link>

      <div className="info">
        <span className="d-block catName">Snack</span>
        <h4 className="title">
          <Link>Cheetos Cheez Puffs</Link>
        </h4>
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
        <span className="brand d-block text-g">
          By <Link className="text-g">NestFood</Link>
        </span>
        <div className="d-flex align-items-center mt-1">
          <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold">$28.32</span>
            <span className="oldPrice">$32.8</span>
          </div>
          <Button className="ml-auto transition">
            <ShoppingCartOutlinedIcon className="cart" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
