import React from "react";
import Header from "./Header";
import Swipe from "./Swipe";

class CommunityResources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDVR: false
    };
  }

  handleDVRClick = () => {
    const { showDVR } = this.state;
    if (showDVR) {
      this.setState(
        {
          showDVR: false
        },
        document.querySelector(".dvr-resources").classList.remove("active")
      );
    } else {
      this.setState(
        {
          showDVR: true
        },
        () => {
          document.querySelector(".dvr-resources").classList.add("active");
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Header />

        <div className="community-resources-header">
          <div className="information1">
            <img
              src="/static/img/heart1.svg"
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

        <p className="but-info-paragraph">
          When survivors come to us with needs beyond the scope of DVRC’s
          services, we work with them to find the help they need elsewhere in
          the community. Listed below are some of the agencies and organizations
          that we commonly refer clients to.
        </p>
        <div className="resources">
          <div className="resource" onClick={this.handleDVRClick}>
            Domestic Violence Resources
          </div>
          <div className="dvr-resources">
            <div className="call-to-safety">
              <div>
                <p>Call to safety</p>
                <p> 503-235-5333 </p>
              </div>
              <p>Visit</p>
            </div>
          </div>

          <div className="resource">Sexual Asault Resources</div>
          <div className="resource">Mental Health Resources</div>
          <div className="resource">Legal Resources</div>
          <div className="resource">Culturally Resources</div>
          <div className="resource">Youth Resources</div>
          <div className="resource">Housing Resources</div>
          <div className="resource">Food and Clothing Resources</div>
          <div className="resource">Other Resources</div>
        </div>
        <Swipe />
      </div>
    );
  }
}

export default CommunityResources;
