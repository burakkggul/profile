import { useState } from "react";
import Icon from "./Icon";
import Zoom from "react-reveal/Zoom";
import { Parallax } from "react-parallax";
import backgroundImage from "../../themes/images/cover_bg_3.jpg";

const Header = (props) => {

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
                    <div className="profile-thumb" style={{backgroundImage:`url(${props.header.profilePicture})`}}></div>
                    <h1>
                      <span>{props.header.name}</span>
                    </h1>
                    <h3>
                      <span>{props.header.title}</span>
                    </h3>
                    <p></p>
                    <ul className="social-icons">
                      {props.header.socialMedias.map((socialMedia, index) => {
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
