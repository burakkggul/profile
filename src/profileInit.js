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
        "On February 23, 2021, Özgür Yazılım AŞ I left the full-time Java Software Developer role that I was continuing. Currently, I am reviewing the code for Özgür Yazılım AŞ for at least 1 hour a day to follow the code quality processes. At the same time, I am working full time as a software engineer at Orion BT."
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
            title: "Java Trainer",
            company: "BilgeAdam - 2022 February - Current",
            body:""
          },
          {
            title: "Software Engineer",
            company: "Orion BT - 2021 March - Current",
            body:""
          },
          {
            title: "Software Quality Assurance",
            company: "Özgür Yazılım A.Ş. - 2021 February - Current",
            body:"I do code review and feedback for at least 1 hour a day to check code quality processes."
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
        name: "Java8",
        value: "95%",
      },
      {
        name: "Spring Framework",
        value: "90%",
      },
      {
        name: "Javascript",
        value: "90%",
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
        value: "60%",
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
        value:"90%"
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
        value:"70%"
      },
      {
        name:"Bootstrap",
        value:"95%"
      },
      {
        name:"Nginx",
        value:"70%"
      },
      {
        name:"Representational State Transfer (REST)",
        value:"90%"
      },
      {
        name:"Jenkins",
        value:"70%"
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
    title: "Software Engineer",
    profilePicture: ProfilePicture,
    socialMedias: [
      { name: "twitter", href: "https://twitter.com/burak8086" },
      { name: "linkedin", href: "https://www.linkedin.com/in/gulburak/" },
      { name: "github", href: "https://github.com/burakkggul" }
    ]
  }
