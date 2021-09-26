import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import HiddenIcon from "../HiddenIcon";
const AboutMainWrapper = styled.div`
  .about-main-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    span {
      border-bottom: 2px solid black;
    }
  }
  .about-image-block {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-wrapper {
    border: 5px solid rgb(245, 245, 245);
    border-style: double;
    padding: 10px;
    border-radius: 5px;
  }
  .main-image {
    border-radius: 5px;
    margin: 0 auto;
  }
  .description {
    max-width: 70%;
    padding: 10px;
    font-weight: 100;
  }
  .flex-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AboutMain = ({ author }) => {
  return (
    <AboutMainWrapper>
      <div className="about-main-title">
        <span>About</span>
      </div>
      <div className="about-image-block">
        <div className="image-wrapper">
          <StaticImage
            src="https://avatars.githubusercontent.com/u/28949213?v=4"
            alt="my profile"
            width={200}
            height={200}
            className="main-image"
          />
        </div>
      </div>
      <div className="flex-block">
        <div className="description">
          {author.description}
          <div>
            <HiddenIcon name="github" url={author.github} />
          </div>
        </div>
      </div>
    </AboutMainWrapper>
  );
};

export default AboutMain;
