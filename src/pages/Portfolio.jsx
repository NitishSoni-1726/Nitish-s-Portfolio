import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Loader from "../components/Loader";

export default function Portfolio() {
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
          <div>Portfolio</div>
        </div>
      ) : (
        <Loader mode={mode} />
      )}
    </>
  );
}
