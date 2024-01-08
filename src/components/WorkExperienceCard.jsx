import React from "react";

const WorkExperienceCard = (props) => {
  return (
    <div>
      <div>{props.data.duration}</div>
      <div>
        {props.data.designation} {props.data.product}
      </div>
      <div>{props.data.company}</div>
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
