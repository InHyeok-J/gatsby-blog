import * as React from "react";
import MainLayout from "../components/layout/MainLayout";
import Banner from "../components/banner";
import NavBar from "../components/navbar";
import Home from "../components/Home";
import HomePosts from "../components/HomePosts";

const MockData = [
    {
        title: "첫 게시글입니다 반갑습니다",
        date: "2021-08-26",
        heroImage: "https://avatars.githubusercontent.com/u/28949213?v=4",
        tags: "잡담",
        body: "Upgle 은 웹 사이트 환경에서 자신이 잘하는 분야를 공유하는 공유자와 배우고 싶은 분야를 배우는 사람들이 실시간으로 인터렉션 할 수 있게 도와주는 사이트입니다한 재능을 공유할 수 있는 채널에 가입해서 실시간 채팅, 화상, 음성 등으로 다른 사람들과 소통하면서 자신의 재능을 공유하거나, 키워나가세요!",
    },
    {
        title: "첫 게시글입니다 반갑습니다",
        date: "2021-08-26",
        heroImage: "https://avatars.githubusercontent.com/u/28949213?v=4",
        tags: "잡담",
        body: "Upgle 은 웹 사이트 환경에서 자신이 잘하는 분야를 공유하는 공유자와 배우고 싶은 분야를 배우는 사람들이 실시간으로 인터렉션 할 수 있게 도와주는 사이트입니다한 재능을 공유할 수 있는 채널에 가입해서 실시간 채팅, 화상, 음성 등으로 다른 사람들과 소통하면서 자신의 재능을 공유하거나, 키워나가세요!",
    },
    {
        title: "첫 게시글입니다 반갑습니다",
        date: "2021-08-26",
        heroImage: "https://avatars.githubusercontent.com/u/28949213?v=4",
        tags: "잡담",
        body: "Upgle 은 웹 사이트 환경에서 자신이 잘하는 분야를 공유하는 공유자와 배우고 싶은 분야를 배우는 사람들이 실시간으로 인터렉션 할 수 있게 도와주는 사이트입니다한 재능을 공유할 수 있는 채널에 가입해서 실시간 채팅, 화상, 음성 등으로 다른 사람들과 소통하면서 자신의 재능을 공유하거나, 키워나가세요!",
    },
];

const IndexPage = () => {
    const [state, setState] = React.useState(
        window.sessionStorage.getItem("check")
    );
    console.log("loading", window.sessionStorage.getItem("check"));
    React.useEffect(() => {
        if (!window.sessionStorage.getItem("check")) {
            setTimeout(() => {
                setState(false);
                window.sessionStorage.setItem("check", "ok");
            }, 2500);
        }
    }, []);

    return (
        <>
            <NavBar />
            {state === null ? (
                <Banner />
            ) : (
                <MainLayout pageTitle="HomePage">
                    <Home />
                    {MockData.map((data) => (
                        <HomePosts data={data} key={data.Title} />
                    ))}
                </MainLayout>
            )}
        </>
    );
};

export default IndexPage;
