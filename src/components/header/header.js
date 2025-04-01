import React, { useEffect, useRef, useState } from "react";
import "../header/header.css";
import shopstic from "../../assets/images/shopstic.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select";
import axios from "axios";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Button from "@mui/material/Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Nav from "./nav/nav";

const Header = () => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const headerRef = useRef();
  const [categories, setCategories] = useState([
    "Milk and Dairies",
    "Wines & Drinks",
    "Clothing and Beauty",
    "Fresh SeaFood",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/positions");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          console.log(res.data);
          res.data.data.map((item, index) => {
            countryList.push(item.name);
          });
          // countryList.push(res.data.name);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // Header to be navigiation
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });
  }, []);

  return (
    <>
      <div className="headerWrapper" ref={headerRef}>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
                <img src={shopstic} alt="slogan" />
              </div>

              {/* header search */}
              <div className="col-sm-5">
                <div className="headerSearch d-flex align-items-center">
                  <Select
                    data={categories}
                    placeholder={"All Categories"}
                    icon={false}
                  />
                  <div className="search">
                    <input type="text" placeholder="Search for items..." />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>
              {/* headersearch end */}
              <div className="col-sm-5 d-flex align-items-center">
                <div className="ml-auto d-flex align-items-center">
                  <div className="countryWrapper">
                    <Select
                      data={countryList}
                      placeholder={"Your Location"}
                      icon={
                        <LocationOnOutlinedIcon style={{ opacity: "0.7" }} />
                      }
                    />
                  </div>

                  <ClickAwayListener
                    onClickAway={() => setisOpenDropDown(false)}
                  >
                    <ul className="list list-inline mb-0 headerTabs">
                      <li className="list-inline-item">
                        <span>
                          <SyncOutlinedIcon className="icons-list" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Compare
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          <FavoriteBorderOutlinedIcon className="icons-list" />
                          <span className="badge bg-success rounded-circle">
                            6
                          </span>
                          Wishlist
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          <ShoppingCartOutlinedIcon className="icons-list" />
                          <span className="badge bg-success rounded-circle">
                            2
                          </span>
                          Cart
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span
                          onClick={() => setisOpenDropDown(!isOpenDropDown)}
                        >
                          <PersonOutlineOutlinedIcon className="icons-list" />
                          Account
                        </span>
                        {isOpenDropDown !== false && (
                          <ul className="dropdownMenu">
                            <li>
                              <Button className="align-items-center">
                                <Person2OutlinedIcon />
                                My Account
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LocationOnOutlinedIcon />
                                Order Tracking
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <RedeemOutlinedIcon />
                                My Vocher
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <FavoriteBorderOutlinedIcon /> My Wishlist
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <TuneOutlinedIcon />
                                Setting
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LogoutOutlinedIcon />
                                Sign out
                              </Button>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </ClickAwayListener>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <Nav />
      </div>
      <div className="afterHeader"></div>
    </>
  );
};

export default Header;
