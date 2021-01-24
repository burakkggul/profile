import { useState } from "react";
import Icon from "./Icon";

const data = {
  name: "Burak GÜL",
  title: "Software Engineer",
  socialMedias: [
    { name: "twitter", href: "https://twitter.com/burak8086" },
    { name: "linkedin", href: "https://www.linkedin.com/in/gulburak/" },
    { name: "github", href: "https://github.com/burakkggul" },
  ],
};

const Header = () => {
  const [header, setHeader] = useState(data);

  const screenHeight = () => {
    return (
      window.screen.availHeight - (window.outerHeight - window.innerHeight)
    );
  };

  return (
    <header
      id="header"
      className="rellax cover"
      role="banner"
      data-rellax-speed="-4"
      style={{ height: screenHeight() }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <div className="display-t" style={{ height: screenHeight() }}>
              <div
                className="display-tc animate-box"
                data-animate-effect="fadeIn"
                style={{ height: screenHeight() }}
              >
                <div className="profile-thumb"></div>
                <h1>
                  <span>{header.name}</span>
                </h1>
                <h3>
                  <span>{header.title}</span>
                </h3>
                <p></p>
                <ul className="social-icons">
                    {header.socialMedias.map((socialMedia, index) => {
                      return <Icon key={index} {...socialMedia} />;
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
