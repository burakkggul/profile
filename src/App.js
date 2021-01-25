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
import { useEffect, useState } from "react";
import React from "react";
import { profileInit } from "./profileInit";

const components = {
  about: About,
  contact: Contact,
  resume: Resume,
  feature: Feature,
  skill: Skill,
  started: Started,
  blog: Blog,
  work: Work,
};

const App = () => {
  console.log(profileInit.header);
  const [store, setStore] = useState(profileInit);
  console.log(store.header);

  return (
    <div className="page">
      <Header {...store}/>
      {store.components.map((componentType, index) => {
        return React.createElement(components[componentType], {
          key: index,
          ...store,
        });
      })}
      <Footer {...store}/>
    </div>
  );
};

export default App;
