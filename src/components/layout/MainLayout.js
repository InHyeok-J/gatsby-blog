import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  animation: fadein 1s;
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  padding: 10px;
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
`;

const MainLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
