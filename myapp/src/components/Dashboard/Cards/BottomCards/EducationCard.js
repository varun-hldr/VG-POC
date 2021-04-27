import React, { Component } from "react";
import * as img from "../../../images";
import { Link } from "react-router-dom";

export default class EducationCard extends Component {
  render() {
    return (
      <div className="card-box bottom-card education">
        <div
          style={{ backgroundImage: `url(${img.cardD})` }}
          className="featured-area"
        >
          <div className="image-overflow">
            <div className="elem-1">
              <div className="d-flex justify-content-between pt-3">
                <div className="d-flex">
                  <img className="glow" src={img.yellowGlow} alt="red-glow" />
                  <span>Education</span>
                </div>
                <img
                  className="social"
                  src={img.socialIcons}
                  alt="socialmedia icons"
                />
              </div>
            </div>
            <div className="elem-2">
              <span className="market-status">Gold</span>
              <h1>Uma Education ,Inc.</h1>
              <div className="elem-footer d-flex">
                <p>
                  Ruling Year: <span>1994</span>
                </p>
                <p>
                  Place: <span>US</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body-box">
          <div className="top-elem">
            <div className="summary">
              <button>summary</button>
            </div>
            <div className="operation">
              <button>Operation</button>
            </div>
          </div>
          <div className="elem-1">
            <p className="text-title">Mission</p>
            <p className="text-desc">
              Ultimate Medical Academy is a dynamic education institution
              committed to equipping and empowering students to excel in
              healthcare carres. We strive to provide a learning experience that
              maximizes value for our students in a professional, supportive and
              ethical enviroment.
            </p>
          </div>

          <div className="more">
            <Link>More +</Link>
          </div>
          <div className="elem-bottom">
            <button>Recomend Grant</button>
            <button>Visit Website</button>
          </div>
        </div>
      </div>
    );
  }
}
