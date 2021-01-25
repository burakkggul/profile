import Fade from "react-reveal/Fade";
import WorkCard from "./WorkCard";

const Work = (props) => {
  return (
    <div id="work">
      <div className="container">
        <div className="row ">
          <Fade bottom>
            <div className="col-md-8 offset-md-2 text-center heading">
              <h2>{props.work.title}</h2>
            </div>
          </Fade>
        </div>
        <div className="row">
          {props.work.projects.map((project, index) => {
            return <WorkCard key={index} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
