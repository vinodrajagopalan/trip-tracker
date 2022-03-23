import React from "react";
import Proptypes from "prop-types";
import { hot } from "react-hot-loader/root";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello world1 {name}</h1>
      </>
    );
  }
}

App.propTypes = {
  name: Proptypes.string.isRequired,
};

export default hot(App);
