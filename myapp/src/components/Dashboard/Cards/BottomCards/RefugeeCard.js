import React, { Component } from "react";
import * as img from "../../../images";

export default class RefugeeCard extends Component {
  render() {
    return (
      <div className="card-box bottom-card refugee">
        <div
          style={{ backgroundImage: `url(${img.cardC})` }}
          className="featured-area"
        >
          <div className="image-overflow">
            <div className="elem-1">
              <div className="d-flex justify-content-between pt-3">
                <div className="d-flex">
                  <img className="glow" src={img.redGlow} alt="red-glow" />
                  <span className="refugee-red">Refugee</span>
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
              <h1>Refugee center online</h1>
              <div className="elem-footer d-flex">
                <p>
                  Ruling Year: <span>2013</span>
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
              The Refugee Center Online (RCO) helps refugees and migrants build
              new lives using technology. RCO's interactive, multi-language
              website provides education oppurtinutes and general information
              about American society, and connects refugees with services,
              programs, and organizations in their new communites.
            </p>
          </div>
          <div className="elem-2">
            <p className="text-title">Cause Area</p>
            <p className="text-desc">
              Ethnic/Immigrant Services
              <span className="has-tag"> P84</span>
            </p>
            <p className="text-desc">
              Public, Society Benifits - Multipurpose and Other NFC
              <span className="has-tag"> W99</span>
            </p>
          </div>
          <div className="elem-2">
            <p className="text-title">Main Address</p>
            <p className="text-desc">1320 SE 122nd Ave</p>
            <p className="text-desc">Portland, OR 97233 USA</p>
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
