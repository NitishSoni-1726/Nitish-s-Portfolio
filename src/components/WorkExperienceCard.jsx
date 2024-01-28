import React, { useContext } from "react";
import { AppContext } from "../App";

const WorkExperienceCard = (props) => {
  const { mode } = useContext(AppContext);

  return (
    <div className="mt-3">
      <div className="p-0 m-0 ps-3">
        {props.data.designation} | {props.data.company}
      </div>
      <div className="d-flex align-items-center m-0 p-0">
        <div
          className={`bg-${mode ? "light" : "dark"} m-0 p-0`}
          style={{ width: "15px", height: "15px", borderRadius: "50%" }}
        ></div>
        <div
          className={`border border-${
            mode ? "light" : "dark"
          } border-1 w-25 m-0 p-0`}
        ></div>
      </div>
      <div className="ps-3">{props.data.duration}</div>
      <div>
        <ul>
          {props.data.description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
