import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 700px;
  margin-top: 100px;
  margin: 0 auto auto;
  /* animation: fadein 1s; */
  /* -webkit-animation: fadein 0.3s; Safari and Chrome */
  padding: 10px;
  padding-top: 50px;
  border: 1px solid rgb(245, 245, 245);
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .image-block {
    display: flex;
    justify-content: center;
    width: auto;
    height: 400px;
    overflow: hidden;
    margin-bottom: 40px;

    .hero-image {
      width: inherit;
      height: inherit;
      object-fit: contain;
      border-radius: 10px;
    }
  }
  .title {
    margin: 0;
    padding: 0;
    color: rgb(51, 51, 51);
    font-size: 3rem;
  }

  .date-tag {
    width: 100%;
    height: auto;
    color: rgb(91, 91, 91);
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .icon {
    margin-right: 5px;
    color: #5e610b;
    width: 20px;
    height: 20px;
    object-fit: fill;
  }
  .date-tag-text {
    position: relative;
    font-weight: 300;
    top: -3px;
    margin-right: 20px;
  }
  .comments {
    margin-top: 100px;
  }
  @media (max-width: 765px) {
  }
  @media (max-width: 480px) {
    padding-top: 60px;
    .date-tag {
      margin-bottom: 20px;
    }
    .title {
      font-size: 2rem;
    }
    .icon {
      width: 18px;
      height: 18px;
    }
    .date-tag-text {
      font-size: 0.9rem;
    }
    .image-block {
      width: 100%;
      margin-bottom: 10px;
      height: auto;
    }
  }
`;

const PostLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PostLayout;
