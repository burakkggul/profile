import Mokapi from "./themes/images/mokapi.png";
import IssueManagement from "./themes/images/issue-management.png";
import Profile from "./themes/images/profile.png";
import SpringSecurity from "./themes/images/spring-security.png";
import ProfilePicture from "./themes/images/profilePicture.jpg";

//HTML'de gösterilmesi istenen componentleri gösterilmek istenen sıra ile components listesine eklenmelidir.
const componentType = {
  ABOUT: "about",
  BLOG: "blog",
  CONTACT: "contact",
  FEATURE: "feature",
  RESUME: "resume",
  SKILL: "skill",
  STARTED: "started",
  WORK: "work",
};

export const profileInit = {
  components: [
    componentType.ABOUT,
    componentType.RESUME,
    componentType.WORK,
    componentType.SKILL,
  ],
  about: {
    title: "About",
    infos: [
      { firstBlock: "Full Name:", secondBlock: "Burak GÜL" },
      { firstBlock: "Email", secondBlock: "contact@burakgul.com.tr" },
      { firstBlock: "Website", secondBlock: "burakgul.com.tr" },
    ],
    content: {
      title: "Hello There!",
      paragraphs: [
        "I graduated from Computer Engineering in June 2019.",
        "I successfully completed the Cloud Computing Expert course given by Wissien Academy with the support of Turkish Employment Agency in October.",
        "I started working at Özgür Yazılım A.Ş. in December 2019. In this process, I used HTML, Javascript, Jquery, SCSS, CSS technologies on the front of the Internet Booking Engine project, which I developed with JAVA and Spring Framework technologies. Apart from that, I manage the project's versioning and deployment processes via Jenkins.",
        "On February 23, 2021, I left my full-time Java Software Developer role as Özgür Yazılım AŞ. For a while, I reviewed the code for at least 1 hour a day to follow the code quality processes for Özgür Yazılım AŞ. Currently, I am working full-time as a software engineer at Orion BT, and at the same time I am working part-time as a Java Trainer at BilgeAdam."
      ],
    },
  },
  resume: {
    title: "My Resume",
    sections: [
      {
        title: "Work Experience",
        icon: "icon-suitcase",
        timelines: [

          {
            title: "Senior Software Engineer",
            company: "Orion BT - 2022 March - Current",
            body:"I take part in the creation of the architectural structure of various projects with Java, JavaScript, Spring Boot, Spring Data, React technologies and the development of applications suitable for this infrastructure. I work as a senior software engineer in the marketplace vf mall project in Vodafone with Java, JavaScript, Spring, Angular."
          },
          {
            title: "Java Trainer",
            company: "BilgeAdam - 2022 February - 2022 October",
            body:""
          },
          {
            title: "Software Engineer",
            company: "Orion BT - 2021 March - 2022 March",
            body:"I take part in the creation of the architectural structure of various projects with Java, JavaScript, Spring Boot, Spring Data, React technologies and the development of applications suitable for this infrastructure."
          },
          {
            title: "Software Consultant",
            company: "Özgür Yazılım A.Ş. - 2021 February - 2021 April",
            body:"I did code review and feedback for at least 1 hour a day to check code quality processes."
          },
          {
            title: "Junior Java Web Developer",
            company: "Özgür Yazılım A.Ş. - 2019 December - 2021 February",
            body:"I worked in the development of web applications for many international airline companies. In this process, I developed with the Java version 1.8 using Spring Core and Spring Web frameworks on the backend. I used Maven and Gradle for compilation. On the front, I developed with JavaScript, JQuery, Thymleaf, SCSS and Bootstrap technologies. I took part in the management of project deployment and versioning processes."
          },
          {
            title: "Intern",
            company: "Başarsoft Bilgi Teknolojileri A.Ş. - Aug 2019 - Nov 2019",
            body:
              'I developed my "Issue Management" application in this period. Issue Management create Restful API using the Spring Framework. PostgreSQL integration with JPA Provider Hibernate and Abstraction Spring Data JPA.Maven is used for project dependency management and build automation. RestFul APIs were created with Spring. Documentation of RestApi was created using the SpringFox Swagger 2 specification. Api tests were performed with postman.'
          },
          {
            title: "Intern",
            company:
              "Turkey Republic Ministry of Education - Jul 2018 - Sep 2018",
            body:
              "In part of my internship, I was interested in support and network management for the end user within the Department of Information Infrastructure Systems and Support Services.In the other part of my internship, I developed Employee Record Automation desktop app using the Java's Swing library within the Department of Educational Information Systems."
          },
          {
            title: "Intern",
            company: "Tiga Bilgi Teknolojileri A.Ş. - Jul 2017 - Aug 2017",
            body:
              "I developed a elevator tracking application using HTML5, CSS3, Javascript and Jquery.In the backend, I have developed an application that generates JSON data in Java to simulate the elevator."
          },
        ],
      },
      {
        title: "Education",
        icon: "icon-graduation-cap",
        timelines: [
          {
            title: "Bachelor of Engineering - Computer Engineering",
            company: "Munzur University - Sep 2015 - Jun 2019",
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
  },
  skill: {
    title: "Skills",
    skills: [
      {
        name: "HTML5/CSS3/SASS",
        value: "95%",
      },
      {
        name: "Java",
        value: "95%",
      },
      {
        name: "Spring Framework",
        value: "95%",
      },
      {
        name: "Javascript",
        value: "95%",
      },
      {
        name: "jQuery",
        value: "85%",
      },
      {
        name: "GNU/Linux",
        value: "90%",
      },
      {
        name: "Thymleaf",
        value: "95%",
      },
      {
        name: "React",
        value: "95%",
      },
      {
        name: "Angular",
        value: "65%",
      },
      {
        name: "Node.js",
        value: "85%"
      },
      {
        name: "Maven",
        value: "90%"
      },
      {
        name: "Gradle",
        value: "80%"
      },
      {
        name:"Object Oriented Programming",
        value:"95%"
      },
      {
        name:"Spring Boot",
        value:"95%"
      },
      {
        name:"Spring MVC",
        value:"90%"
      },
      {
        name:"Spring Data MongoDB",
        value:"70%"
      },
      {
        name:"Spring Data JPA",
        value:"95%"
      },
      {
        name:"Bootstrap",
        value:"95%"
      },
      {
        name:"Nginx",
        value:"80%"
      },
      {
        name:"Representational State Transfer (REST)",
        value:"95%"
      },
      {
        name:"Jenkins",
        value:"70%"
      },
      {
        name:"Kafka",
        value:"90%"
      },
      {
        name:"Elasticsearch",
        value:"70%"
      },
      {
        name:"Microservices",
        value:"90%"
      },
      {
        name:"Docker",
        value:"95%"
      }
    ],
  },
  work: {
    title: "Project",
    projects: [
      {
        photo: Mokapi,
        href: "https://github.com/burakkggul/mokapi",
        name: "Mokapi",
        description:
          "This project is fake REST API for testing and prototyping.",
      },
      {
        photo: Profile,
        href: "https://github.com/burakkggul/profile",
        name: "Profile",
        description:
          "This project is a personal website project user interface.",
      },
      {
        photo: SpringSecurity,
        href: "https://github.com/burakkggul/spring-security-turkce",
        name: "Spring Security Türkçe",
        description:
          "Turkish reference for JWT Spring Security implementation.",
      },
      {
        photo: IssueManagement,
        href: "https://github.com/burakkggul/issue-management",
        name: "Issue Management API",
        description: "Issue Management Application API.",
      },
    ],
  }
};

export const initHeader = {
    name: "Burak GÜL",
    title: "Senior Software Engineer",
    profilePicture: ProfilePicture,
    socialMedias: [
      { name: "twitter", href: "https://twitter.com/benburakgul" },
      { name: "linkedin", href: "https://www.linkedin.com/in/gulburak/" },
      { name: "github", href: "https://github.com/burakkggul" }
    ]
  }
