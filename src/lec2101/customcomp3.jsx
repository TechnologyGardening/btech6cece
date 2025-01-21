import { useState } from "react";
import NewComponent1 from "./customrequest";

const ShowComp = ({ var3 }) => (var3 ? <NewComponent1 /> : null);
function TestComponent() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide User" : "Show User"}
      </button>
      <ShowComp var3={show} />
    </>
  );
}
export default TestComponent;
