import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { mode } = useContext(AppContext);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateCursorPosition);
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className={`cursor-follower ${mode ? "text-light" : "text-dark"}`}
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    >
      <FontAwesomeIcon icon={faArrowPointer} />
    </div>
  );
};

export default CursorFollower;
