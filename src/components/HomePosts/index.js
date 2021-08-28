import React from "react";
import styled from "styled-components";
import { MdDateRange } from "react-icons/md";
import { FaTag } from "react-icons/fa";
const Container = styled.div`
    width: auto;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    :hover .image-block img {
        transform: scale(1.1); /*  default */
        -webkit-transform: scale(1.1); /*  크롬 */
    }
    .image-block {
        width: 50%;
        height: 300px;
        overflow: hidden;
        border-radius: 10px;

        margin: 5px;
    }
    .contents {
        margin: 5px;
        width: 50%;
        height: 300px;
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
        margin-top: 15px;
        margin-bottom: 15px;
    }
    span {
        margin-right: 10px;
    }
    .icon {
        margin-right: 5px;
        width: 20px;
        height: 20px;
        object-fit: fill;
    }
    .date-tag-text {
        position: relative;
        top: -3px;
    }
    .body {
        display: -webkit-box;
        display: -ms-flexbox;
        display: box;
        margin-top: 1px;
        max-height: 100px;
        overflow: hidden;
        vertical-align: top;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
`;

const HomePosts = ({ data }) => {
    console.log("test");
    return (
        <Container>
            <div className="image-block">
                <img src={data.heroImage} alt={data.title} />
            </div>
            <div className="contents">
                <p className="title">{data.title}</p>
                <div className="date-tag">
                    <span>
                        <MdDateRange className="icon" />
                        <span className="date-tag-text">{data.date}</span>
                    </span>
                    <span>
                        <FaTag className="icon" />
                        <span className="date-tag-text">{data.tags}</span>
                    </span>
                </div>
                <div className="body">{data.body}</div>
            </div>
        </Container>
    );
};

export default HomePosts;
