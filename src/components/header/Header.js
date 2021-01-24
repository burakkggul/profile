import { useState } from "react";
import Icon from "./Icon";
import Zoom from "react-reveal/Zoom";
import { Parallax } from "react-parallax";
import backgroundImage from "../../themes/images/cover_bg_3.jpg";

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
    <Parallax bgImage={backgroundImage} strength={300}>
      <header
        id="header"
        className="cover"
        role="banner"
        style={{ height: screenHeight() }}
      >
        <div className="overlay"></div>
        <div className="container">
          <Zoom>
            <div className="row">
              <div className="col-md-8 offset-md-2 text-center">
                <div className="display-t" style={{ height: screenHeight() }}>
                  <div
                    className="display-tc "
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
          </Zoom>
        </div>
      </header>
    </Parallax>
  );
};

export default Header;
