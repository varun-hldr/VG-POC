import React, { Component } from "react";
import * as img from "../../../images";
import { Link } from "react-router-dom";

export default class EducationCardSecond extends Component {
  render() {
    return (
      <div className="card-box bottom-card education">
        <div
          style={{ backgroundImage: `url(${img.cardE})` }}
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
              <h1>National Humane Education Soc.</h1>
              <div className="elem-footer d-flex">
                <p>
                  Ruling Year: <span>1996</span>
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
              The mission of The National Hurmane Education Society is "to
              foster a sentiment of kindness to animals in children and adults
              ..."
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
