import * as React from "react";
class StateExample extends React.Component {
  state = {
    first: false,
    second: true,
  };
  render() {
    const { first, second } = this.state;
    return (
      <div>
        <button disabled={first}>Button 1</button>
        <button disabled={second}>Button 2</button>
      </div>
    );
  }
}
export default StateExample;
