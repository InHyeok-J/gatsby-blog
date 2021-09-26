import * as React from "react";
import MainLayout from "../components/layout/MainLayout";
import Banner from "../components/banner";
import NavBar from "../components/navbar";
import Home from "../components/Home";
import HomePosts from "../components/HomePosts";
import Footer from "../components/footer";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const [state, setState] = React.useState(
    window.sessionStorage.getItem("check")
  );
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
        <>
          <MainLayout>
            <Home />
            {data.allMdx.edges.map((data) => (
              <HomePosts data={data} key={data.node.frontmatter.title} />
            ))}
          </MainLayout>
          <Footer />
        </>
      )}
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        next {
          frontmatter {
            title
          }
          slug
        }
        previous {
          frontmatter {
            title
          }
          slug
        }
        node {
          frontmatter {
            title
            date(formatString: "MMMM D YYYY")
            heroimage
            tags
          }
          slug
          id
        }
      }
    }
  }
`;
export default IndexPage;
