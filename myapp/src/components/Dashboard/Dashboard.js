import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import * as img from "../images";
import "./Dashboard.scss";
import "./BottomCard.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import EducationCard from "./Cards/EducationCard";
import EducationCardSecond from "./Cards/EducationCardSecond";
import RefugeeCard from "./Cards/RefugeCard";
import * as BottomCards from "./Cards/BottomCards";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <header
          style={{ backgroundImage: `url(${img.HomeBannerTop})` }}
          className="body-head"
        >
          <div className="overlay"></div>
        </header>
        <div className="dashboard-container">
          <div className="dashboard-body">
            <div className="header-logo">
              <Link to="/">
                <img src={img.Logo} alt="site-logo" />
              </Link>
            </div>
            <Navbar
              logo={img.Logo}
              menus={["Account", "Grant", "Contribution", "Report", "Logout"]}
              name={"Elizabeth Stanton"}
            />
            <div className="body-container">
              <div className="header-body">
                <div className="element-1">
                  <div className="heading d-flex">
                    <h1>The Stanton Children's Education Fund</h1>
                    <button>
                      <ExpandMoreIcon />
                    </button>
                  </div>
                  <span>The standard VCEP Seed Fund</span>
                </div>
                <div className="element-2">
                  <div className="elem-1">
                    <span>Available Balance</span>
                    <h1>$500,000</h1>
                    <span className="add">Add</span>
                  </div>
                  <div className="elem-2">
                    <span>Current Balance</span>
                    <h1>$536,000</h1>
                  </div>
                  <div className="elem-3">
                    <span>Grant made</span>
                    <h1>$139,000</h1>
                  </div>
                </div>
                <div className="element-3 row">
                  <div className="left-box col-7">
                    <h1>Legacy journey</h1>
                    <div className="elem-1 d-flex justify-content-between">
                      <span>Balance overtime</span>
                      <div className="date-range d-flex justify-content-between">
                        <button>1D</button>
                        <button>5D</button>
                        <button>1M</button>
                        <button>3M</button>
                        <button>6M</button>
                        <button>YTD</button>
                        <button>1Y</button>
                        <button>5Y</button>
                        <button>MAX</button>
                      </div>
                    </div>
                    <div className="elem-2">
                      <img className="graph" src={img.graph} alt="graph" />
                    </div>
                  </div>
                  <div className="right-box col-5">
                    <h1>Activity</h1>
                    <div className="elem-1">
                      <div className="top">
                        <h1>$50,000</h1>
                      </div>
                      <div className="bottom d-flex justify-content-between">
                        <span>Wire Transfer</span>
                        <span>1 Jan 2017</span>
                      </div>
                    </div>
                    <div className="elem-2">
                      <div className="top">
                        <h1>$50,000</h1>
                      </div>
                      <div className="bottom d-flex justify-content-between">
                        <span>Grant Made</span>
                        <span>1 Feb 2017</span>
                      </div>
                    </div>
                    <div className="elem-3">
                      <div className="top">
                        <span>Recommended an exchange</span>
                      </div>
                      <div className="bottom d-flex justify-content-between">
                        <span>Gift Presevation</span>
                        <span>8 March 2017</span>
                      </div>
                    </div>
                    <div className="elem-4">
                      <div className="top">
                        <span>Recommended an exchange</span>
                      </div>
                      <div className="bottom d-flex justify-content-between">
                        <span>Conservative Growth</span>
                        <span>10 July 2017</span>
                      </div>
                    </div>
                    <div className="elem-5">
                      <div className="top">
                        <h1>$50,000</h1>
                      </div>
                      <div className="bottom d-flex justify-content-between">
                        <span>Wire Transfer</span>
                        <span>1 Jan 2018</span>
                      </div>
                    </div>
                    <div className="elem-6">
                      <Link>Show more +</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="element-4">
                <div className="heading d-flex">
                  <h1>Investment Options</h1>
                  <p>
                    (Invested in <span>6</span> Options)
                  </p>
                </div>

                <div className="total-data d-flex justify-content-between">
                  {this.viewSmallGraph(
                    img.graphA,
                    "Short Term Bond",
                    "$13.56",
                    "+1.50(+12.44%)"
                  )}
                  {this.viewSmallGraph(
                    img.graphB,
                    "Total Bond",
                    "$16.23",
                    "+1.45(-8.20%)"
                  )}
                  {this.viewSmallGraph(
                    img.graphC,
                    "Moderate Growth",
                    "$39.21",
                    "+2.78(+7.63%)"
                  )}
                  {this.viewSmallGraph(
                    img.graphC,
                    "Total Equity",
                    "$23.54",
                    "+0.28(+2.11%)"
                  )}
                  {this.viewSmallGraph(
                    img.graphB,
                    "European Stock",
                    "$16.32",
                    "-1.67(+9.28%)"
                  )}
                  {this.viewSmallGraph(
                    img.graphA,
                    "Money Market",
                    "$11.20",
                    "-0.38(-3.28%)"
                  )}
                </div>
                <div className="elem-bottom d-flex justify-content-center">
                  <button>+ Recommended an exchange</button>
                </div>
              </div>
              <div className="element-5">
                <div className="inner-box d-flex justify-content-between">
                  <h1>Grant Recommendation</h1>
                  <div className="filters">
                    <button>
                      <img src={img.filter} alt="filter" />
                      Filter by category
                    </button>
                    <button>
                      <SearchIcon />
                      Find a charity
                    </button>
                  </div>
                </div>
              </div>
              <div className="data-cards flex-wrap">
                <div className="card-col">
                  <EducationCard />
                  <BottomCards.EduCard />
                </div>
                <div className="card-col">
                  <RefugeeCard />
                  <BottomCards.RefugeeCard />
                </div>
                <div className="card-col">
                  <EducationCardSecond />
                  <BottomCards.EduCardSecond />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  viewSmallGraph = (img, title, balance, growth) => {
    return (
      <div className="elem-box">
        <img src={img} alt="graphA" />
        <h1>{title}</h1>
        <div className="data d-flex justify-content-between">
          <span className="balance">{balance}</span>
          <span className="growth">{growth}</span>
        </div>
      </div>
    );
  };
}
