import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Loader from "../components/Loader";

export default function Blogs() {
  const { mode } = useContext(AppContext);
  const [data, setData] = useState(false);
  setTimeout(() => {
    setData(true);
  }, 500);

  return (
    <>
      {data ? (
        <div
          className={`d-flex flex-column align-items-center text-${
            mode ? "light" : "dark"
          }`}
        >
          <div>Blog</div>
        </div>
      ) : (
        <Loader mode={mode} />
      )}
    </>
  );
}
