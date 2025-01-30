import * as React from "react";
import { UserProvider } from "./use_con_exmp1";
import { Page1, Page2, Page3 } from "./use_con_exmp2";
import { Page4, Page5 } from "./use_con_emp4";
function SelectPage({ v1 }) {
  const Page = [Page1, Page2, Page3, Page4, Page5][v1];
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
      <button onClick={() => setPage(2)} disabled={page === 2}>
        Page3
      </button>
      <button onClick={() => setPage(3)} disabled={page === 3}>
        Page4
      </button>
      <button onClick={() => setPage(4)} disabled={page === 4}>
        Page5
      </button>

      <SelectPage v1={page} />
    </UserProvider>
  );
}
