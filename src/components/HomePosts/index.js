import React from "react";
import styled from "styled-components";
import { MdDateRange } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { Link } from "gatsby";

const HomePosts = ({ data }) => {
    const previous = data.previous ? data.previous.slug : "null";
    const next = data.next ? data.next.slug : "null";
    return (
        <Container>
            <Link to={`/post/${data.node.slug}?previous=${next}&next=${previous}`}>
                <div className="image-block">
                    <img
                        src={data.node.frontmatter.heroimage}
                        alt={data.node.frontmatter.title}
                    />
                </div>
                <div className="contents">
                    <p className="title">{data.node.frontmatter.title}</p>
                    <div className="date-tag">
                        <span>
                            <MdDateRange className="icon" />
                            <span className="date-tag-text">
                                {data.node.frontmatter.date}
                            </span>
                        </span>
                        <span>
                            <FaTag className="icon" />
                            <span className="date-tag-text">
                                {data.node.frontmatter.tags}
                            </span>
                        </span>
                    </div>
                </div>
            </Link>
        </Container>
    );
};

export default HomePosts;

const Container = styled.div`
    width: auto;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        padding: 5px;
    }
    :hover {
        border: 1px solid rgb(200, 200, 200);
    }
    :hover .image-block img {
        transform: scale(1.1); /*  default */
        -webkit-transform: scale(1.1); /*  크롬 */
    }
    .image-block {
        width: 100%;
        height: 350px;
        overflow: hidden;
        border-radius: 10px;
    }
    .contents {
        padding-top: 5px;
        width: 100%;
        height: 100px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .title {
        margin: 0;
        padding: 0;
        color: rgb(51, 51, 51);
        font-size: 2rem;
    }
    img {
        transition: all 0.5s ease-in-out;
        width: 100%;
        height: inherit;
        object-fit: cover;
    }
    .date-tag {
        width: 100%;
        height: auto;
        color: rgb(91, 91, 91);
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .icon {
        margin-right: 5px;
        width: 20px;
        height: 20px;
        object-fit: fill;
    }
    .date-tag-text {
        position: relative;
        margin-right: 10px;
        font-weight: 300;
        top: -3px;
    }
    /* .body {   본문 ... 이 적용된css, 일단 주석 처리
        color: black;
        display: -webkit-box;
        display: -ms-flexbox;
        display: box;
        font-weight: 100;
        margin-top: 1px;
        max-height: 50px;
        overflow: hidden;
        vertical-align: top;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    } */
    @media screen and (max-width: 767px) {
        /* 모바일 */
        .title {
            font-size: 1.8rem;
        }
        /* .body {
            max-height: 25px;
        } */
        .date-tag {
            display: flex;
            flex-direction: column;
        }
    }
    @media screen and (max-width: 480px) {
        /* 작은 모바일 */
        .image-block {
            height: 200px;
        }
        .title {
            font-size: 1.35rem;
        }
        /* .body {
            display: none;
        } */
        .icon {
            margin-right: 2px;
            width: 15px;
            height: 15px;
            object-fit: fill;
        }
        .date-tag {
            margin-top: 10px;
        }
        .date-tag-text {
            width: 100%;
            position: relative;
            font-weight: 300;
            top: -2px;
            margin-right: 0;
            font-size: 0.8rem;
        }
    }
`;
