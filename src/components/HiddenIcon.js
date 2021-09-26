import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const HiddenIconWraaper = styled.div`
  padding: 0 auto;
  position: relative;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  align-items: center;
  a {
    color: rgb(91, 91, 91);
    margin: 0;
    padding: 0;
  }
  :hover {
    color: black;
    background-color: rgb(230, 230, 230);
    .hidden-icon {
      color: black;
    }
    .hidden_text {
      opacity: 1;
    }
  }

  .hidden-icon {
    margin-bottom: 5px;
    height: 34px;
    font-size: 50px;
  }
  svg {
    position: relative;
    left: -5px;
    top: 2px;
    font-size: 100px;
  }
  .hidden_text {
    transition: all 0.3s ease-in-out;
    font-size: 0.7rem;
    opacity: 0;
    position: relative;
    top: 0px;
    left: -12px;
    width: 60px;
    padding: 4px;
    line-height: 20px;
    text-align: center;
    height: 25px;
    margin-left: 10px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background: #333;
    color: #fff;
  }
`;

const HiddenIcon = ({ name, url }) => {
  let icon;
  let text;
  switch (name) {
    case "github":
      icon = <AiFillGithub className="hidden-icon" />;
      text = "github";
      break;
    case "post":
      icon = <AiFillGithub className="hidden-icon" />;
      text = "post";
      break;
  }
  return (
    <>
      <HiddenIconWraaper>
        <a href={url} target="_blank" rel="noreferrer">
          {icon}
        </a>
        <span className="hidden_text">{text}</span>
      </HiddenIconWraaper>
    </>
  );
};
export default HiddenIcon;
