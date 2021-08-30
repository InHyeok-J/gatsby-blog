import { graphql } from "gatsby";
import React from "react";
import PostLayout from "../../components/layout/PostLayout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Navbar from "../../components/navbar";
import { MarkdownWrapper } from "../../components/MdStyle";
import { MdDateRange } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import Footer from "../../components/footer";
import Utterances from "../../components/Utterances";

const Post = ({ data }) => {
    return (
        <>
            <PostLayout>
                <Navbar />
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
                date(formatString: "MMMM D YYYY")
                heroimage
                tags
                title
            }
        }
    }
`;
export default Post;
