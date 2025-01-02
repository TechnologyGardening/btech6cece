import { useState } from "react";
function StateExmp1() {
  const [name, setName] = useState("RKU");
  const [age, setAge] = useState(45);
  const [color, setColor] = useState("Red");
  const [bld, setBld] = useState(100);
  const [chk, setChk] = useState(true);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <p>Name of candidate is : {name}</p>
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p style={{ background: color, height: 50, fontWeight: bld }}>
        Age of candidate is : {age}
      </p>
      <input
        type="radio"
        name="C1"
        onChange={() => {
          setColor("Blue");
          setName("Blue");
          setBld(300);
        }}
      />
      <input
        type="radio"
        name="C1"
        onChange={() => {
          setColor("Yellow");
          setName("Yellow");
          setBld(500);
        }}
      />
      <input
        type="radio"
        name="C1"
        onChange={() => {
          setColor("Green");
          setName("Green");
          setBld(700);
        }}
      />
      <input
        type="checkbox"
        checked={chk}
        onChange={() => {
          setChk(!chk);
          chk ? setBld(700) : setBld(200);
        }}
      />
      {chk}
      {color}
    </div>
  );
}
export default StateExmp1;
