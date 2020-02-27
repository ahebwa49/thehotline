import React from "react";
import Header from "./Header";
import Swipe from "./Swipe";

const CommunityResources = () => {
  return (
    <div>
      <Header />
      <div className="but-info-div" />
      <p className="but-info-heading">Community Resources</p>
      <p className="but-info-paragraph">
        Si ergo ilia tantum fastidium compesce contra naturalem usum habili,
        quem habetis vestra potestate, non aliud quam aversantur incurrere. Sed
        si ipse aversaris, ad languorem: et mors, paupertas et to miseros fore.
      </p>
      <Swipe />
    </div>
  );
};

export default CommunityResources;
