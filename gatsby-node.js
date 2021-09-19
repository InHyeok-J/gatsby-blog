const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          next {
            slug
            frontmatter {
              title
            }
          }
          node {
            body
            frontmatter {
              date(formatString: "MM DD YYYY")
              heroimage
              tags
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
        }
      }
    }
  `);

  const posts = data.allMdx.edges;
  posts.forEach((NODE, index) => {
    console.log(NODE.node.slug);
    actions.createPage({
      path: `/post/` + NODE.node.slug,
      component: path.resolve("./src/pages/post/{mdx.slug}.js"),
      context: {
        slug: NODE.node.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    });
  });
};
