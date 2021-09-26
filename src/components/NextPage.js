import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaTag } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const NextPageWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  padding-top: 20px;
  transition: all 0.2s ease-in-out;
  a {
    color: rgb(51, 51, 51);
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 10px;
    box-sizing: border-box;
  }
  .page-icon-blcok {
    width: 20%;
    svg {
      font-size: 30px;
    }
  }
  .title-block {
    width: 80%;
  }
  .border-box {
    height: 80px;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 10px;
  }
  .border-box:hover {
    border: 1px solid rgb(45, 45, 45);
  }
  .container {
    width: 45%;
    text-align: center;
  }
  .icon {
    color: black;
    width: 15px;
    position: relative;
    top: 5px;
  }
  .tag {
    font-size: 0.9rem;
  }
  .next-page-title {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    .container {
      width: 50%;
    }
    .next-page-title {
      font-size: 0.9rem;
    }
  }
`;

const NextPage = ({ pageContext }) => {
  const next = pageContext.next ? pageContext.next : null;
  const previous = pageContext.prev ? pageContext.prev : null;
  console.log("next", next, "previous", previous);
  return (
    <NextPageWrapper>
      <div className="container">
        {previous && (
          <div className="previous-page border-box">
            <Link to={`/post/${previous.slug}`}>
              <div className="page-icon-blcok">
                <AiOutlineArrowLeft />
              </div>
              <div className="title-block">
                <div className="next-page-title">
                  {previous.frontmatter.title}
                </div>
                <div className="tag">
                  <FaTag className="icon" />
                  {previous.frontmatter.tags}
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
      <div className="container">
        {next && (
          <div className="next-page border-box">
            <Link to={`/post/${next.slug}`}>
              <div className="title-block">
                <div className="next-page-title">{next.frontmatter.title}</div>
                <div className="tag">
                  <FaTag className="icon" />
                  {next.frontmatter.tags}
                </div>
              </div>
              <div className="page-icon-blcok">
                <AiOutlineArrowRight />
              </div>
            </Link>
          </div>
        )}
      </div>
    </NextPageWrapper>
  );
};
export default NextPage;
