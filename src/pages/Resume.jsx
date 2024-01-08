import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Loader from "../components/Loader";

export default function Resume() {
  const { mode } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 500);

  return (
    <>
      {loading ? (
        <div
          className={`d-flex flex-column align-items-center text-${
            mode ? "light" : "dark"
          }`}
        >
          <div>Resume</div>
        </div>
      ) : (
        <Loader mode={mode} />
      )}
    </>
  );
}
