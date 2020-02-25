import React from "react";

const Swipe = () => {
  return (
    <div className="swipe">
      <img src="/static/img/icon.png" width="36" alt="swipe" height="36" />
      <p className="swipe-note">
        Swipe in anytime to start playing a game and hide this screen
      </p>
      <img
        src="/static/img/visual-icon.png"
        alt="hide"
        width="36"
        height="36"
      />
    </div>
  );
};

export default Swipe;
