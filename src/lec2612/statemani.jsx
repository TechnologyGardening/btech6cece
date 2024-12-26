import * as React from "react";
class StateExample2 extends React.Component {
  state = {
    first: false,
    second: true,
    txt: "Initial Value",
    clr: "red",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        first: true,
        second: false,
        txt: "Updated Value",
        clr: "blue",
      });
    }, 5000);
    setTimeout(() => {
      this.setState({
        first: false,
        second: true,
        txt: "Updated Value 2",
        clr: "yellow",
      });
    }, 10000);
  }
  render() {
    const { first, second, txt, clr } = this.state;
    return (
      <div>
        <button disabled={first}>Button 1</button>
        <button disabled={second}>Button 2</button>
        <label style={{ color: clr }}>{txt}</label>
        <input value={txt} />
      </div>
    );
  }
}
export default StateExample2;
