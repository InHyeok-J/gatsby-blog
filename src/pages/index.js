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
                    <MainLayout pageTitle="HomePage">
                        <Home />
                        {data.allMdx.nodes.map((data) => (
                            <HomePosts
                                data={data}
                                key={data.frontmatter.title}
                            />
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
            nodes {
                id
                excerpt(pruneLength: 500, truncate: true)
                slug
                frontmatter {
                    title
                    heroimage
                    tags
                    date(formatString: " MMMM D YYYY")
                }
            }
        }
    }
`;
export default IndexPage;
