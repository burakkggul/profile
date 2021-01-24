import { useState } from "react";
import ProgressBar from "./ProgressBar";

const data = [
  {
    name: "HTML5/CSS3",
    value: "95%",
  },
  {
    name: "WordPress",
    value: "90%",
  },
  {
    name: "PHP",
    value: "80%",
  },
  {
    name: "Java",
    value: "85%",
  },
  {
    name: "jQuery",
    value: "75%",
  },
];

const Skill = (props) => {
  const [skills, setSkills] = useState(data);
  return (
    <div id="skills" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center heading">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="row">
          {skills.map((skill, index) => {
            return <ProgressBar key={index} skill={skill} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
