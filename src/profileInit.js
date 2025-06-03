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
        "I graduated with a Bachelor's degree in Computer Engineering in June 2019.",
        "In October 2019, I completed the Cloud Computing Expert course provided by Wissien Academy with the support of the Turkish Employment Agency.",
        "I started working at Özgür Yazılım A.Ş. in December 2019, where I contributed to the development of web applications for several international airline companies. On the backend, I worked with Java and Spring Framework; on the frontend, I used HTML, JavaScript, jQuery, SCSS, and CSS. I also managed version control and deployment processes using Jenkins.",
        "In February 2021, I left my full-time Java Software Developer role at Özgür Yazılım A.Ş., but continued part-time by conducting daily code reviews to help ensure code quality.",
        "In March 2021, I joined Orion BT as a Software Engineer. Over time, I took part in multiple enterprise projects and was promoted to Senior Software Engineer in 2022. During this period, I worked primarily with Java, JavaScript, Spring Boot, React, and Angular. Between February and October 2022, I also provided part-time Java training at BilgeAdam.",
        "As of May 2025, I have been working at ID3 as a Senior Software Engineer. I’m actively contributing to the development of 'td4p,' an internal application at Turkish Technology designed to simplify data generation from enterprise services for analysts, developers, and test engineers. In this project, I primarily use Spring Framework, PostgreSQL, and Next.js, along with various supporting technologies."
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
            company: "ID3(Turkish Technology) – May 2025 – Present",
            body: 'Currently contributing to the development of "td4p," an internal application at Turkish Technology aimed at streamlining data generation from enterprise services for analysts, developers, and test engineers. Primarily working with Spring Framework, PostgreSQL, and Next.js, alongside various other supporting technologies.'
          },
          {
            title: "Senior Software Engineer",
            company: "Orion BT(Vodafone) – March 2022 – May 2025",
            body: "Participated in designing and implementing the architectural structure of various enterprise-level projects using Java, JavaScript, Spring Boot, Spring Data, and React. Served as a senior software engineer in Vodafone’s VF Mall marketplace project, working primarily with Java, JavaScript, Spring, and Angular technologies."
          },
          {
            title: "Java Trainer",
            company: "BilgeAdam – February 2022 – October 2022",
            body: "Provided professional Java training to aspiring developers, focusing on Java SE and Java EE concepts, object-oriented programming, and backend development with Spring technologies."
          },
          {
            title: "Software Engineer",
            company: "Orion BT – March 2021 – March 2022",
            body: "Contributed to the architectural planning and development of multiple enterprise applications using Java, JavaScript, Spring Boot, Spring Data, and React."
          },
          {
            title: "Software Consultant",
            company: "Özgür Yazılım A.Ş. – February 2021 – April 2021",
            body: "Conducted daily code reviews and provided technical feedback to ensure code quality and adherence to development best practices."
          },
          {
            title: "Junior Java Web Developer",
            company: "Özgür Yazılım A.Ş. – December 2019 – February 2021",
            body: "Worked on the development of web applications for several international airline companies. Used Java 1.8 with Spring Core and Spring Web on the backend, and JavaScript, JQuery, Thymeleaf, SCSS, and Bootstrap on the frontend. Managed deployment and versioning processes, and utilized both Maven and Gradle for build automation."
          },
          {
            title: "Intern",
            company: "Başarsoft Bilgi Teknolojileri A.Ş. – August 2019 – November 2019",
            body: 'Developed a “Issue Management” web application using Spring Framework. Integrated PostgreSQL via JPA with Hibernate and Spring Data JPA. Managed dependencies with Maven and documented REST APIs using SpringFox (Swagger 2). Performed API testing using Postman.'
          },
          {
            title: "Intern",
            company: "Ministry of National Education, Republic of Turkey – July 2018 – September 2018",
            body: 'Handled end-user support and network management within the Information Infrastructure Systems and Support Services Department. Also developed an Employee Record Automation desktop application using Java Swing within the Educational Information Systems Department.'
          },
          {
            title: "Intern",
            company: "Tiga Bilgi Teknolojileri A.Ş. – July 2017 – August 2017",
            body: 'Developed an elevator tracking simulation application using HTML5, CSS3, JavaScript, and jQuery on the frontend. On the backend, created a Java application that generates JSON data to simulate elevator behavior.'
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
        value: "95%",
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
        name: "Next.JS",
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
        value:"90%"
      },
      {
        name:"Representational State Transfer (REST)",
        value:"95%"
      },
      {
        name:"Jenkins",
        value:"90%"
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
