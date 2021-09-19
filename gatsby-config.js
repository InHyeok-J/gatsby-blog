module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "HyeokBlog",
    },
    plugins: [
        "gatsby-plugin-use-query-params",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/posts`,
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [`.md`, `.mdx`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 700,
                        },
                    },
                    {
                        resolve: "gatsby-remark-table-of-contents",
                        options: {
                            exclude: "Table of Contents",
                            tight: false,
                            ordered: false,
                            fromHeading: 1,
                            toHeading: 6,
                            className: "table-of-contents",
                        },
                    },
                    {
                        resolve: "gatsby-remark-autolink-headers",
                        options: {
                            className: "anchor-header",
                            icon: false,
                            maintainCase: false,
                            removeAccents: true,
                            elements: [`h1`, `h2`, `h3`],
                        },
                    },
                ],
            },
        },
        "gatsby-transformer-sharp",
        `gatsby-plugin-react-helmet`,
    ],
};
