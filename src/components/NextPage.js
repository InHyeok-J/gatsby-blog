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
  a {
    color: rgb(51, 51, 51);
    text-decoration: none;
    height: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .border-box {
    height: 80px;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 10px;
    svg {
      font-size: 50px;
    }
  }
  .container {
    width: 300px;
    text-align: center;
  }
  .icon {
    color: black;
    position: relative;
    top: 4px;
  }
  .next-page-title {
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
              <AiOutlineArrowLeft />
              <div>
                <div className="next-page-title">
                  {previous.frontmatter.title}
                </div>
                <div>
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
              <div>
                <div className="next-page-title">{next.frontmatter.title}</div>
                <div>
                  <FaTag className="icon" />
                  {next.frontmatter.tags}
                </div>
              </div>
              <AiOutlineArrowRight />
            </Link>
          </div>
        )}
      </div>
    </NextPageWrapper>
  );
};
export default NextPage;
