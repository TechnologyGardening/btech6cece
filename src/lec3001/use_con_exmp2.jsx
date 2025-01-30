import * as React from "react";
import { UserContext } from "./use_con_exmp1";
function UserName() {
  const user = React.useContext(UserContext);
  return <p>Logged in as {user.name}</p>;
}
export function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
      <UserName />
    </div>
  );
}
export function Page2() {
  return (
    <div>
      <h1>Page 2</h1>
      <UserName />
    </div>
  );
}
export function Page3() {
  return (
    <div>
      <h1>Page 3</h1>
      <UserName />
    </div>
  );
}
