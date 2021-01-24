import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Header from "./components/header/Header";
import Feature from "./components/feature/Feature";
import Skill from "./components/skill/Skill";
import Started from "./components/started/Started";
import Work from "./components/work/Work";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <div className="page">
      <Header />
      <About />
      <Resume />
      <Feature />
      <Skill />
      <Work />
      <Blog />
      <Started />
      <Contact />
      <Footer />
      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="icon-arrow-up22"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
