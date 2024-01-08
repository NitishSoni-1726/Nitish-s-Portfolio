import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../App";
import Loader from "../components/Loader";

export default function Home() {
  const { mode } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 500);

  return (
    <>
      {loading ? (
        <div
          className={`pt-3 w-100 d-flex flex-column align-items-center text-${
            mode ? "light" : "dark"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            className="d-flex align-items-center justify-content-start w-75"
          >
            <div className="d-flex flex-column align-items-center">
              <div
                className={`m-0 p-0 bg-${mode ? "white" : "black"}`}
                style={{ width: "20px", height: "20px", borderRadius: "50%" }}
              ></div>
              <div
                className="m-0 p-0"
                style={{
                  border: `2px solid ${mode ? "white" : "black"}`,
                  height: "150px",
                  width: "1px",
                }}
              ></div>
            </div>
            <div className="m-0 p-0 ms-2">
              <h1 className="m-0 p-0">
                Hi, I'm{" "}
                <span className={`text-${mode ? "success" : "danger"}`}>
                  Nitish
                </span>
              </h1>
              <p
                className="m-0 p-0 d-flex flex-column"
                style={{ fontSize: "14px" }}
              >
                <span>I'm a web wizard weaving creativity into</span>
                <span> functional and beautiful digital realms.</span>
              </p>
            </div>
          </motion.div>
        </div>
      ) : (
        <Loader mode={mode} />
      )}
    </>
  );
}
