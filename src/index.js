import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import But from "./common/But";
import * as serviceWorker from "./serviceWorker";
import ButInfo from "./common/ButInfo";
import CommunityResources from "./common/CommunityResources";

class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/but" component={But} />
          <Route path="/but/no-steady-income" component={ButInfo} />
          <Route path="/community-resources" component={CommunityResources} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
