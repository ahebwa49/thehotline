import React from "react";
import PopUpHeader from "./PopUpHeader";
import PopUpLogo from "./PopUpLogo";
import PopUpContent from "./PopUpContent";
import Swipe from "./Swipe";

import "./common.css";

const PopUp = props => {
  return (
    <div className="pop-up">
      <PopUpHeader />
      <PopUpLogo />
      <PopUpContent startQuiz={props.startQuiz} />
      <Swipe />
    </div>
  );
};

export default PopUp;
