import React from "react";
import NavBar from "../components/navbar";
import AboutMain from "../components/aboutMain";
import PostLayout from "../components/layout/PostLayout";

const dummyAboutData = {
  author: {
    name: "조인혁",
    description:
      "안녕하세요:) 백엔드 개발자가 되고 싶은 조인혁입니다! 제 블로그에 방문해주셔서 감사합니다. 포스팅 보시고 잘못된 부분이 있거나 궁금한점은 댓글로 달아주시면 감사하겠습니다.",
    github: "https://github.com/InHyeok-J",
  },
};

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <PostLayout>
        <AboutMain author={dummyAboutData.author} />
      </PostLayout>
    </>
  );
};

export default AboutPage;
