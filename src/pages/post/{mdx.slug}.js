import { graphql } from "gatsby";
import React from "react";
import PostLayout from "../../components/layout/PostLayout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MarkdownWrapper } from "../../components/MdStyle";
import { MdDateRange } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import Footer from "../../components/footer";
import Utterances from "../../components/Utterances";
import NavBar from "../../components/navbar";
import { toFit } from "../../utils/ScrollEvent";
import NextPage from "../../components/NextPage";
import { useQueryParam,  StringParam } from "use-query-params";


const Post = ({ data }) => {
    const [next, setNext] = useQueryParam("next", StringParam);
    console.log("get params", next);
    let HeaderElements;
    let HeaderElementsArray;
    let TOC = document.getElementsByClassName("table-of-contents");

    React.useEffect(() => {
        HeaderElements = document.querySelectorAll("h1,h2,h3");
        HeaderElementsArray = [...HeaderElements];

        if (TOC[0]) {
            appendScrollEnvet(TOC, HeaderElementsArray);
        }
    }, []);

    React.useEffect(() => {
        if (Array.isArray(HeaderElementsArray) && TOC[0]) {
            function onScroll() {
                const currentTag = findCurrentTag(HeaderElementsArray);
                findTOCTag(currentTag, TOC);
                // addClassCurrentTag(currentTag);
                // console.log("스크롤 위치", window.scrollY);
            }

            window.addEventListener("scroll", toFit(onScroll, {}), {
                passive: true,
            });

            return () => {
                window.removeEventListener("scroll", toFit(onScroll, {}), {
                    passive: true,
                });
            };
        }
    });

    return (
        <>
            <NavBar />
            <PostLayout>
                <p className="title">{data.mdx.frontmatter.title}</p>
                <div className="date-tag">
                    <span>
                        <MdDateRange className="icon" />
                        <span className="date-tag-text">
                            {data.mdx.frontmatter.date}
                        </span>
                    </span>
                    <span>
                        <FaTag className="icon" />
                        <span className="date-tag-text">
                            {data.mdx.frontmatter.tags}
                        </span>
                    </span>
                </div>
                <div className="image-block">
                    <img
                        class="hero-image"
                        src={data.mdx.frontmatter.heroimage}
                        alt={data.mdx.frontmatter.title}
                    />
                </div>
                <MarkdownWrapper>
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </MarkdownWrapper>
                <NextPage slug={next}/>
                <Utterances repo="InHyeok-J/gatsby-blog" theme="github-light" />
            </PostLayout>
            <Footer />
        </>
    );
};

export const query = graphql`
    query ($slug: String) {
        mdx(slug: { eq: $slug }) {
            body
            tableOfContents
            frontmatter {
                date(formatString: "MM D YYYY")
                heroimage
                tags
                title
            }
        }
    }
`;

const findCurrentTag = (elementsArray) => {
    const navbarElement = document.getElementById("Navbar"); // Navbar Element를 가져옴.
    const NavBarHeight =
        navbarElement !== undefined ? navbarElement.offsetHeight : 0; //navbar

    const middleHeight = window.scrollY + window.innerHeight / 2 - NavBarHeight;

    return elementsArray.reduce((pre, cur) => {
        if (middleHeight < pre.offsetTop && middleHeight < cur.offsetTop) {
            //현재 스크롤의 중간 값보다 이전 의 offsetTop이 더크고
            //현재 스크롤의 중간 값보다 다음 의 offsetTop이 작은경우 -> 원래 로직
            return pre;
        }

        if (pre.offsetTop < middleHeight && middleHeight <= cur.offsetTop) {
            //이전 offsetTop보다 중간 값이 더 크고
            //중간 값보다 다음 오프셋이 작거나 같은 경우.>???/
            return pre;
        }

        return cur;
    });
};

const findTOCTag = (currnetHeader, TOC) => {
    if (TOC[0]) {
        const TOC_Atag = TOC[0].getElementsByTagName("a");

        for (const element of TOC_Atag) {
            if (decodeURI(element.href).split("#")[1] === currnetHeader.id) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        }
    }
};

const appendScrollEnvet = (TOC, HeaderElementsArray) => {
    const TOC_Atag = TOC[0].getElementsByTagName("a");

    HeaderElementsArray.map((v) => {
        const target = document.querySelector("#" + v.id); // H 태그의 ID로 target H 태그찾기.

        for (const element of TOC_Atag) {
            if (decodeURI(element.href).split("#")[1] === v.id) {
                element.addEventListener("click", (e) => {
                    e.preventDefault();
                    window.scrollTo({
                        top: target.offsetTop - 150,
                        behavior: "smooth",
                    });
                });

                console.log(decodeURI(element.href).split("#")[1], v.id);
            }
        }
    });
};

export default Post;
