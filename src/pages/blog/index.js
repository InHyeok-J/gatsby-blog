import * as React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {data.allMdx.nodes.map((node) => (
                    <article
                        key={node.id}
                        style={{
                            padding: "10px",
                            border: "1px solid black",
                            borderRadius: "5px",
                        }}
                    >
                        <h2>
                            <Link to={`/blog/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                id
                slug
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
            }
        }
    }
`;

export default BlogPage;
