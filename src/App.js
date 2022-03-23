import React from "react";
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

export default hot(App);
