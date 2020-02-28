import React from "react";

const Swipe = () => {
  return (
    <div className="swipe">
      <img src="/static/img/icon.svg" width="36" alt="swipe" height="36" />
      <p className="swipe-note">
        <b>Swipe</b> in anytime to start playing a game and hide this screen
      </p>
      <img
        src="/static/img/visual-icon.svg"
        alt="hide"
        width="36"
        height="36"
      />
    </div>
  );
};

export default Swipe;
