import { useReducer } from "react";
function Fun1(state, action) {
  console.log(action);
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.name };
    case "changeAge":
      return { ...state, age: action.age };
    default:
      throw new Error("Unknown action type ");
  }
}
function Reducer1() {
  const [{ name, age }, dispatch] = useReducer(Fun1, { name: "", age: "" });
  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          dispatch({
            type: "changeName",
            name: e.target.value,
          })
        }
      />
      <p> {name}</p>
      <input
        placeholder="Age"
        value={age}
        onChange={(e) =>
          dispatch({
            type: "changeAge",
            age: e.target.value,
          })
        }
      />
      {age}
    </div>
  );
}
export default Reducer1;
