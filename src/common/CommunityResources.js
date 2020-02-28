import React from "react";
import Header from "./Header";
import Swipe from "./Swipe";

const CommunityResources = () => {
  return (
    <div>
      <Header />

      <div className="community-resources-header">
        <div className="information1">
          <img
            src="/static/img/heart 1.svg"
            alt="heart"
            className="community-resources-header-img"
          />
        </div>

        <div className="community-resources-header-text">
          <p className="but-header-text-header">COMMUNITY RESOURCES</p>
          <p className="but-header-text-content">
            Find help in your community, support groups, shelters and more.
          </p>
        </div>
      </div>

      {/* <p className="community-resources-heading">Community Resources</p> */}

      <p className="but-info-paragraph">
        When survivors come to us with needs beyond the scope of DVRC’s
        services, we work with them to find the help they need elsewhere in the
        community. Listed below are some of the agencies and organizations that
        we commonly refer clients to.
      </p>
      <div className="resources">
        <p>
          Domestic Violence Resources
        </p>
      </div>
      <Swipe />
    </div>
  );
};

export default CommunityResources;
