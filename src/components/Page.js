import About from "./about/About";
import Contact from "./contact/Contact";
import Resume from "./resume/Resume";
import Feature from "./feature/Feature";
import Skill from "./skill/Skill";
import Started from "./started/Started";
import Work from "./work/Work";
import Blog from "./blog/Blog";
import React, { useState } from "react";
import { profileInit } from "../profileInit";

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

const Page = () => {
  const [store] = useState(profileInit);
  return (
    <div>
      {store.components.map((componentType, index) => {
        return React.createElement(components[componentType], {
          key: index,
          ...store,
        });
      })}
    </div>
  );
};

export default Page;
