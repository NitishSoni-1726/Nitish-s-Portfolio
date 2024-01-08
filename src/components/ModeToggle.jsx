import React, { useContext } from "react";
import { AppContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

export default function ModeToggle() {
  const { mode, setMode } = useContext(AppContext);

  return (
    <div
      style={{ position: "fixed", top: "63px", right: "10px" }}
      className="cursor"
    >
      {mode ? (
        <button
          style={{
            background: "none",
            color: "white",
            fontSize: "25px",
            border: "none",
            display: "flex",
            justifyContent: "flex-end",
            margin: 0,
            padding: 0,
            cursor: "none",
          }}
          onClick={() => {
            setMode(!mode);
          }}
        >
          <FontAwesomeIcon icon={faToggleOn} />
        </button>
      ) : (
        <button
          style={{
            background: "none",
            color: "black",
            fontSize: "25px",
            border: "none",
            display: "flex",
            justifyContent: "flex-end",
            margin: 0,
            padding: 0,
            cursor: "none",
          }}
          onClick={() => {
            setMode(!mode);
          }}
        >
          <FontAwesomeIcon icon={faToggleOff} />
        </button>
      )}
    </div>
  );
}
