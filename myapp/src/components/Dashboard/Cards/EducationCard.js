import React, { Component } from "react";
import * as img from "../../images";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { Link } from "react-router-dom";

export default class EducationCard extends Component {
  render() {
    return (
      <div className="card-box">
        <div className="heading-top d-flex justify-content-between green">
          <div className="card-top-left">
            <span>Grant</span>
            <h1>Every year</h1>
          </div>
          <div className="card-top-right">
            <input type="range" className="slider" />
            <span>50%</span>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img.cardA})` }}
          className="featured-area"
        >
          <div className="image-overflow">
            <div className="elem-1">
              <span>Education</span>
              <div className="d-flex justify-content-between">
                <span>$41,700</span>
                <img src={img.socialIcons} alt="socialmedia icons" />
              </div>
            </div>
            <div className="elem-2">
              <span className="market-status">Gold</span>
              <h1>Association for childhood edu.</h1>
              <div className="elem-footer d-flex">
                <p>
                  Ruling Year: <span>1952</span>
                </p>
                <p>
                  Place: <span>Africa, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body-box">
          <div className="elem-1">
            <p className="text-title">
              <CheckBoxOutlineBlankIcon />
              10:47 am - 4 Jan 2018
            </p>
            <p className="text-desc">
              BBC News - Sesame Street to help Syrian refugees{" "}
              <span className="has-tag">#innovation #education</span>
            </p>
          </div>
          <div className="elem-2">
            <p className="text-title">
              <CheckBoxOutlineBlankIcon />
              13:43 am - 3 Jan 2018
            </p>
            <p className="text-desc">
              "Mrs. Wong taught me how to speak English, how to think, how to
              questio. This teacher was caring, and went above and beyond to
              make me feel confident."
              <Link className="link-tag">http://ow.ly/9PlR30hyMOj</Link>
            </p>
          </div>
          <div className="more">
            <Link>More +</Link>
          </div>
        </div>
      </div>
    );
  }
}
