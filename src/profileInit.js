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
      { firstBlock: "Phone:", secondBlock: "+90 543 443 0468" },
      { firstBlock: "Email", secondBlock: "burakkggul@gmail.com" },
      { firstBlock: "Website", secondBlock: "www.burakgul.com.tr" },
    ],
    content: {
      title: "Hello There!",
      paragraphs: [
        "There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.",
        "Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci there live the blind texts from the countries Vokalia and Consonantia, there live the blind texts. Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.",
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
            title: "Junior Java Web Developer",
            company: "Özgür Yazılım A.Ş. - 2019 December - Current",
            body:""
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
  },
  header: {
    name: "Burak GÜL",
    title: "Software Engineer",
    profilePicture: ProfilePicture,
    socialMedias: [
      { name: "twitter", href: "https://twitter.com/burak8086" },
      { name: "linkedin", href: "https://www.linkedin.com/in/gulburak/" },
      { name: "github", href: "https://github.com/burakkggul" },
    ],
  },
};