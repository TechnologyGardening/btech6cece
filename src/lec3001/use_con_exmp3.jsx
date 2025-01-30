import * as React from "react";
import { UserProvider } from "./use_con_exmp1";
import { Page1, Page2, Page3 } from "./use_con_exmp2";
function SelectPage({ v1 }) {
  const Page = [Page1, Page2, Page3][v1];
  return <Page />;
}
export default function UseContextExample() {
  const [page, setPage] = React.useState(0);
  return (
    <UserProvider>
      <button onClick={() => setPage(0)} disabled={page === 0}>
        Page1
      </button>
      <button onClick={() => setPage(1)} disabled={page === 1}>
        Page2
      </button>
      <SelectPage v1={page} />
    </UserProvider>
  );
}
