import { createRoot } from "react-dom/client";
import UseContextExample from "./lec3001/use_con_exmp3";
import Reducer1 from "./lec1002/reducerexmp";
import MultipleState from "./lec1002/reducerexmp2";

createRoot(document.getElementById("root")).render(
  <div>
    <MultipleState />
  </div>
);
