import { useEffect, useReducer } from "react";
const initialState = {
  options: [
    { id: 1, label: "Car", value: 15 },
    { id: 2, label: "Bike", value: 50 },
    { id: 3, label: "Plane", value: 70 },
  ],
  quantity: 1,
  selected: 1,
};
function ReduceButtonState(state) {
  return {
    ...state,
    decrementDisabled: state.quantity === 0,
    incrementDisabled: state.quantity === 10,
  };
}
function ReduceTotal(state) {
  const option = state.options.find((y) => y.id === state.selected);
  return { ...state, total: state.quantity * option.value };
}
function Reducer1(state, action) {
  let newState;
  switch (action.type) {
    case "init":
      newState = ReduceTotal(state);
      return ReduceButtonState(newState);
    case "decrement":
      newState = { ...state, quantity: state.quantity - 1 };
      newState = ReduceTotal(newState);
      return ReduceButtonState(newState);
    case "increment":
      newState = { ...state, quantity: state.quantity + 1 };
      newState = ReduceTotal(newState);
      return ReduceButtonState(newState);
    case "selectItem":
      newState = { ...state, selected: Number(action.id) };
      return ReduceTotal(newState);
    default:
      throw new Error("Unknown action type");
  }
}

export default function MultipleState() {
  const [
    {
      options,
      selected,
      quantity,
      total,
      decrementDisabled,
      incrementDisabled,
    },
    dispatch,
  ] = useReducer(Reducer1, initialState);
  useEffect(() => {
    dispatch({ type: "init" });
  }, []);
  return (
    <>
      <section>
        <button
          disabled={incrementDisabled}
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <input readOnly value={quantity} />
        <button
          disabled={decrementDisabled}
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </section>
      <section>
        <select
          value={selected}
          onChange={(e) =>
            dispatch({
              type: "selectItem",
              id: e.target.value,
            })
          }
        >
          {options.map((i) => (
            <option key={i.id} value={i.id}>
              {i.label} {i.value}
            </option>
          ))}
        </select>
        <p>Total cart value is {total}</p>
      </section>
    </>
  );
}
