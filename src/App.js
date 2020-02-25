import React from "react";
import Logo from "./common/Logo";
import Content from "./common/Content";
import Swipe from "./common/Swipe";
import Header from "./common/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Logo />
        <Content />
        <Swipe />
      </div>
    );
  }
}

export default App;
