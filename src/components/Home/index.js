import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Typing } from "typing-effect-reactjs";
import { AiFillGithub } from "react-icons/ai";
import LogoImg from "../../../public/icons/BlogLogo.svg";

const Home = () => {
  return (
    <HomeWrapper>
      <img src={LogoImg} alt="logo" className="logo-image" />
      <div className="introduce">
        <p className="small-text">기록을 좋아하는 </p>
        <div className="introduce-text">
          <span>
            백엔드 개발자
            <Typing
              styleClass="typing"
              element="span"
              text="Hyeok"
              typeSpeed={500}
              deleteSpeed={200}
              disableBlinkingOnEnd={100}
              blinkingSpeed={1000}
              cursorColor="gray"
            />
          </span>
          <span>블로그입니다.</span>
        </div>
        <div className="github_iconblcok">
          <a
            href="https://github.com/InHyeok-J"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="github_icon" />
          </a>
        </div>
        <span className="hidden_text">github Link</span>
      </div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgb(230, 230, 230);
  .logo-image {
    width: 150px;

    animation-name: rotate_image;
    animation-duration: 10s; /* 재생 시간 (실행속도) */
    animation-timing-function: ease-in; /* 속도곡선타입 */
    animation-delay: 2s; /* 딜레이 시간 */
    animation-iteration-count: infinite; /* 반복 횟수 */
    animation-direction: alternate; /* 진행 방향 */
    animation-fill-mode: forwards; /* 종료 후 위치 */

    /* animation: rotate_image 3s linear infinite; */
    transform-origin: 50% 50%;
  }
  @keyframes rotate_image {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(120deg);
    }
    50% {
      transform: rotate(120deg);
    }
    60% {
      transform: rotate(240deg);
    }
    80% {
      transform: rotate(240deg);
    }
    95% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .small-text {
    text-align: center;
    font-size: 1rem;
  }
  .introduce {
    margin-top: 5px;
    font-size: 1.5rem;
    font-weight: 100;
    color: rgb(91, 91, 91);
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 0;
    }
    .typing-effect__typewriter {
      display: inline-block;
    }
    .typing {
      display: inline-block;
      margin: 0;
      font-size: 2rem;
      display: inline;
      font-weight: 500;
    }
  }
  .introduce-text {
    text-align: center;
  }

  .github_iconblcok {
    position: relative;
    border-radius: 5px;
    width: 26px;
    height: 34px;
    cursor: pointer;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    align-items: center;

    a {
      color: rgb(91, 91, 91);
      width: inherit;
      height: inherit;
      margin: 0;
      padding: 0;
    }
  }
  .github_iconblcok:hover {
    color: black;
    background-color: rgb(130, 130, 130);
    .github_icon {
      color: black;
    }
  }
  .github_iconblcok:hover + .hidden_text {
    opacity: 1;
  }
  .github_icon {
    margin-bottom: 5px;
    height: 34px;
  }
  .hidden_text {
    transition: all 0.3s ease-in-out;
    font-size: 0.7rem;
    opacity: 0;
    position: relative;
    top: 5px;
    left: -5px;
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

  /* .hidden_text:after {
    position: absolute;
    z-index: -1;
    bottom: 100%;
    left: 2px;
    top: 15%;
    width: 0;
    height: 0;
    margin-left: -10px;
    border: 1px solid transparent;
    border-color: rgba(51, 51, 51, 0);
    border-bottom-color: #333;
    border-width: 8px;
    pointer-events: none;
    content: " ";
  } */
  @media (max-width: 480px) {
    .introduce {
      font-size: 1.1em;
      white-space: nowrap;

      .typing {
        font-size: 2rem;
        margin-left: 0px;
      }
    }
    .small-text {
      font-size: 0.8rem;
    }
    .github_iconblcok {
      width: 23px;
      height: 23px;
    }
    .github_icon {
      height: 23px;
      position: relative;
      left: 2px;
    }
    .hidden_text {
      width: 50px;
      padding: 3px;
      height: 20px;
      font-size: 0.5rem;
    }
    .hidden_text:after {
      top: 0;
    }
  }
`;
