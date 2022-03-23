import React from "react";
import Proptypes from "prop-types";
import { hot } from "react-hot-loader/root";
import { Title } from "./App.style";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Title>{name}</Title>
      </>
    );
  }
}

App.propTypes = {
  name: Proptypes.string.isRequired,
};

export default hot(App);
