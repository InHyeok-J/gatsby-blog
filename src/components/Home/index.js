import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Typing } from "typing-effect-reactjs";
import { AiFillGithub } from "react-icons/ai";

const Home = () => {
    return (
        <Container>
            <div className="introduce">
                <p className="small-text">기억보단 기록을</p>
                <p>안녕하세요!</p>
                <p>
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
                </p>
                <p>블로그입니다.</p>
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
            <div>
                <StaticImage
                    src="https://avatars.githubusercontent.com/u/28949213?v=4"
                    alt="my profile"
                    className="image"
                    placeholder="dominantColor"
                    width={300}
                    height={300}
                />
            </div>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgb(230, 230, 230);
    .small-text {
        font-size: 1rem;
    }
    .introduce {
        margin-left: 30px;
        width: 70%;
        font-size: 2rem;
        font-weight: 100;
        color: rgb(91, 91, 91);
        p {
            margin: 0;
        }
        .typing {
            margin: 0;
            margin-left: 20px;
            font-size: 3rem;
            display: inline;
            font-weight: 500;
        }
    }
    .image {
        border-radius: 120px;
        margin-right: 30px;
    }
    .github_iconblcok {
        position: relative;
        border-radius: 5px;
        width: 34px;
        height: 34px;
        cursor: pointer;
        display: inline-block;
        transition: all 0.3s ease-in-out;

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
        position: absolute;
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

    .hidden_text:after {
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
    }
`;
