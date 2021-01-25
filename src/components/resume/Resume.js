import { useState } from "react";
import Fade from "react-reveal/Fade";

const Resume = (props) => {
  return (
    <div id="resume" className="bg-color">
      <div className="container">
        <Fade bottom>
          <div className="row ">
            <div className="col-md-8 offset-md-2 text-center heading">
              <h2>{props.resume.title}</h2>
            </div>
          </div>
        </Fade>
        <div className="row">
          <div className="col-md-12 offset-md-0">
            {props.resume.sections.map((section, index) => {
              return (
                <ul className="timeline"  key={index}>
                  <Fade bottom>
                    <li className="timeline-heading text-center ">
                      <div>
                        <h3>{section.title}</h3>
                      </div>
                    </li>
                  </Fade>
                  {section.timelines.map((timeline, idx) => {
					  return (
                    <Fade bottom key={idx}>
                      <li className={(idx % 2 === 0) ? 'timeline-inverted' : 'timeline-unverted'}>
                        <div className="timeline-badge">
                          <i className={section.icon}></i>
                        </div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h3 className="timeline-title">{timeline.title}</h3>
                            <span className="company">{timeline.company}</span>
                          </div>
                          <div className="timeline-body">
                            <p>{timeline.body}</p>
                          </div>
                        </div>
                      </li>
                    </Fade>)
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
