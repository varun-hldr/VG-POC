import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import * as img from "../images";
import "./Home.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <header
          style={{ backgroundImage: `url(${img.HomeBannerTop})` }}
          className="body-head"
        >
          <div className="overlay"></div>
        </header>
        <div className="home-container">
          <div className="home-body">
            <div className="home-top">
              <Navbar
                logo={img.Logo}
                menus={["Individual", "Corporation", "Advisor", "Contact Us"]}
              />
              <div className="hero-sec">
                <div className="featured-text">
                  <h1>Help them uphold their rigth to education </h1>
                </div>
              </div>
            </div>

            <div className="body-box">
              <div className="element-1 featured-box">
                <div className="div-top">
                  <span>Help children in nigeria</span>
                </div>
                <div className="div-bottom">
                  <span>
                    Your charity can give them a better future through education
                  </span>
                  <button>
                    <ArrowForwardIcon />
                  </button>
                </div>
              </div>
              <div className="element-2">
                <div className="left-box">
                  <div className="elem-1">
                    <h1>$7,131,294,186</h1>
                    <span>Total charitable giving</span>
                  </div>
                  <div className="elem-2">
                    <span>People like you are bringing the change</span>{" "}
                  </div>
                  <div className="elem-3">
                    <div className="text">
                      <span>
                        Make your contribution by opening a giving account
                      </span>
                    </div>
                  </div>

                  <div className="elem-bottom">
                    <span>Get Started</span>
                    <button>
                      <ArrowForwardIcon />
                    </button>
                  </div>
                </div>

                <div className="right-box">
                  <div className="elem-1">
                    <img src={img.LoginImage} alt="login" />
                  </div>
                  <div className="elem-2">
                    <p>
                      <span>Login</span> to your giving account & start
                      contributing
                    </p>
                  </div>
                  <div className="elem-bottom">
                    <span>SignUp</span>
                    <button>
                      <ArrowForwardIcon />
                    </button>
                  </div>
                </div>
              </div>
              <div className="element-3">
                <div className="benefits">
                  <span>Benefits of our philanthropic accounts</span>
                </div>
                <div className="box-bottom d-flex">
                  <div className="featured-box">
                    <div className="div-top">
                      <span>Make giving part of your tax strategy</span>
                    </div>
                    <div className="div-bottom">
                      <span>
                        Your charity can give them a better future through
                        education
                      </span>
                      <button>
                        <ArrowForwardIcon fontSize="large" />
                      </button>
                    </div>
                  </div>
                  <div className="tax-strategy">
                    <span>Explore tax strategy</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="link-dashboard">
              <Link to="/dashboard">Go to Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
