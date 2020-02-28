import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Swipe from "./Swipe";

const ButInfo = () => {
  return (
    <div>
      <Header />
      <div className="but-info-div">
        <img
          src="/static/img/butInfoMaskGroup.svg"
          alt="sad"
          className="but-info-mask-group"
        />
      </div>
      <p className="but-info-heading">I don't have a steady income...</p>
      <p className="but-info-paragraph">
        Si ergo ilia tantum fastidium compesce contra naturalem usum habili,
        quem habetis vestra potestate, non aliud quam aversantur incurrere. Sed
        si ipse aversaris, ad languorem: et mors, paupertas et to miseros fore.
      </p>
      <p className="but-info-support-paragrah">
        What can you do? <b>Support Resources</b>:
      </p>
      <div className="call-the-hotline">
        <div className="call-background">
          <img
            src="/static/img/telephone1.svg"
            width="36"
            height="52"
            alt="telephone"
          />
        </div>
        <div className="call-text">
          <p className="call-text-headline">CALL THE HOTLINE</p>
          <p className="call-text-paragraph">
            See tips on how to protect yourself and make a call and what to
            expect
          </p>
        </div>
      </div>
      <Link to="/community-resources" style={{ textDecoration: "none" }}>
        <div className="community-resources">
          <div className="cr-background">
            <img
              src="/static/img/heart1.svg"
              width="40"
              height="40"
              alt="heart"
            />
          </div>
          <div className="cr-text">
            <p className="cr-text-headline">COMMUNITY RESOURCES</p>
            <p className="cr-text-paragraph">
              Find help in your community, support groups, shelters and more.
            </p>
          </div>
        </div>
      </Link>

      <Swipe />
    </div>
  );
};

export default ButInfo;
