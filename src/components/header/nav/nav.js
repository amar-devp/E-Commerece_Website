import React from "react";
import "../nav/nav.css";
import veges from "../../../assets/images/veges.jpeg";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="col-sm-2 part1 d-flex align-items-center">
            <Button className="bg-g  catTab">
              <GridViewOutlinedIcon />
              &nbsp;Browse ALL Categories
              <KeyboardArrowDownIcon />
            </Button>
          </div>

          <div className="col-sm-8 part2 position-static">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <Link>Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Shop</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Vendors</Link>
                  </Button>
                </li>
                <li className="list-inline-item position-static">
                  <Button>
                    <Link>
                      Mega menu
                      <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                  <div className="dropdown_menu megaMenu w-100">
                    <div className="row">
                      <div className="col">
                        <h4 className="text-g">Fruits & Vegetables</h4>
                        <ul className="mt-3 mb-0">
                          <li><Link to="">Meat Polutry</Link></li>
                          <li><Link to="">Fresh Vegetables</Link></li>
                          <li><Link to="">herbs & Seasonings</Link></li>
                          <li><Link to="">Cuts & Sprouts</Link></li>
                          <li><Link to="">Exotic Fruits & veges</Link></li>
                          <li><Link to="">Packaged Produce</Link></li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g">Breakfast & Dairy</h4>
                        <ul className="mt-3 mb-0">
                          <li><Link to="">Meat Polutry</Link></li>
                          <li><Link to="">Fresh Vegetables</Link></li>
                          <li><Link to="">herbs & Seasonings</Link></li>
                          <li><Link to="">Cuts & Sprouts</Link></li>
                          <li><Link to="">Exotic Fruits & veges</Link></li>
                          <li><Link to="">Packaged Produce</Link></li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g">Meat & Seafood</h4>
                        <ul className="mt-3 mb-0">
                          <li><Link to="">Meat Polutry</Link></li>
                          <li><Link to="">Fresh Vegetables</Link></li>
                          <li><Link to="">herbs & Seasonings</Link></li>
                          <li><Link to="">Cuts & Sprouts</Link></li>
                          <li><Link to="">Exotic Fruits & veges</Link></li>
                          <li><Link to="">Packaged Produce</Link></li>
                        </ul>
                      </div>
                      <div className="col">
                        <img src={veges} alt="vegetables" className="w-100" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Blog</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Pages
                      <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="">Contact</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="">Forgot Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="">Reset Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="">Purchase Guide</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="">Privacy Policy</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="">Terms of Service</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="">404 Page</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className="phNo d-flex align-items-center ml-auto">
              <span>
                <HeadsetMicOutlinedIcon />
              </span>
              <div className="info ml-3">
                <h3 className="text-g mb-0">1900 - 888</h3>
                <p className="text-g mb-0">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
