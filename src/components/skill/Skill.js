import ProgressBar from "./ProgressBar";

const Skill = (props) => {
  return (
    <div id="skills">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center heading">
            <h2>{props.skill.title}</h2>
          </div>
        </div>
        <div className="row">
          {props.skill.skills.map((skill, index) => {
            return <ProgressBar key={index} skill={skill} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
