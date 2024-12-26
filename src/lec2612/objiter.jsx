import * as React from "react";
class IterableExample extends React.Component {
  state = {
    first: "loading...",
    second: "loading...",
    third: "loading...",
    fourth: "loading...",
    fifth: "loading...",
    donemsg: "loading complete",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({ first: "done" });
    }, 2000);
    setTimeout(() => {
      this.setState({ second: "done" });
    }, 4000);
    setTimeout(() => {
      this.setState({ third: "done" });
    }, 6000);
    setTimeout(() => {
      this.setState({ fourth: "done" });
    }, 8000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        fifth: state.donemsg,
      }));
    }, 10000);
  }

  render() {
    return (
      <ul>
        {Object.keys(this.state)
          .filter((key) => key !== "donemsg")
          .map((key) => (
            <li key={key}>
              <strong>{key}:</strong>
              {this.state[key]}
            </li>
          ))}
      </ul>
    );
  }
}
export default IterableExample;
