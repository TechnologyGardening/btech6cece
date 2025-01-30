import * as React from "react";
export const UserContext = React.createContext();
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 10000);
  });
}
export function UserProvider({ children }) {
  const [user, setUser] = React.useState("abc");
  React.useEffect(() => {
    fetchUser().then((user) => setUser(user));
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
