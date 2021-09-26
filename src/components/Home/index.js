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
    margin-bottom: 10px;
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
