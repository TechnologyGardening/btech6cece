import * as React from "react";
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 10000);
  });
}
function ApiSimulation() {
  const [user, setUser] = React.useState("loading");
  const [id, setId] = React.useState("loading");
  React.useEffect(() => {
    fetchUser().then((user) => {
      setUser(user.name);
      setId(user.id);
    });
  });
  return (
    <div>
      User: {user}, <br />
      ID: {id}
    </div>
  );
}

export default ApiSimulation;
// create a component whuch will return
// unordered list passed by fecthdata()
// resolve promise with list/array of strings
