import { useState } from "react";
import Fade from "react-reveal/Fade";

const data = {
  title: "My Resume",
  sections: [
    {
      title: "Work Experience",
      timelines: [
        {
          title: "Junior Java Web Developer",
          company: "Özgür Yazılım A.Ş. - 2019 December - Current",
          body:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          title: "Intern",
          company: "Başarsoft Bilgi Teknolojileri A.Ş. - Aug 2019 - Nov 2019",
          body:
            'I developed my "Issue Management" application in this period. Issue Management create Restfulapis using the Spring Framework.PostgreSQL integration with JPA Provider Hibernate and Abstraction Spring Data JPA.Maven is used for project dependency management and build automation. RestFul APIs were created with Spring. Documentation of RestApi was created using the SpringFox Swagger 2 specification. Api tests were performed with postman.',
        },
        {
          title: "Intern",
          company:
            "Turkey Republic Ministry of Education - Jul 2018 - Sep 2018",
          body:
            "• In part of my internship, I was interested in support and network management for the end user within the Department of Information Infrastructure Systems and Support Services.In the other part of my internship, I developed Employee Record Automation desktop app using the Java's Swing library within the Department of Educational Information Systems.",
        },
        {
          title: "Intern",
          company: "Tiga Bilgi Teknolojileri A.Ş. - Jul 2017 - Aug 2017",
          body:
            "I developed a elevator tracking application using HTML5, CSS3, Javascript and Jquery.In the backend, I have developed an application that generates JSON data in Java to simulate the elevator.",
        },
      ],
    },
    {
      title: "Education",
      timelines: [
        {
          title: "Bachelor of Engineering - Computer Engineering",
          company: "Tiga Bilgi Teknolojileri A.Ş. - Sep 2015 - Jun 2019",
          body: "",
        },
        {
          title: "Graduation",
          company: "Cumhuriyet Anadolu Öğretmen Lisesi - 2011 - 2015",
          body: "",
        },
      ],
    },
  ],
};

const Resume = () => {
  const [resume, setResume] = useState(data);
  return (
    <div id="resume" className="bg-color">
      <div className="container">
        <Fade bottom>
          <div className="row ">
            <div className="col-md-8 offset-md-2 text-center heading">
              <h2>{resume.title}</h2>
            </div>
          </div>
        </Fade>
        <div className="row">
          <div className="col-md-12 offset-md-0">
            {resume.sections.map((section, index) => {
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
                      <li className="timeline-unverted">
                        <div className="timeline-badge">
                          <i className="icon-suitcase"></i>
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
