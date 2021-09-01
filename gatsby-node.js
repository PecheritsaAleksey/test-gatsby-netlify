/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicBlog {
        nodes {
          id
          uid
        }
      }
    }
  `)

  const template = path.resolve("src/templates/blog-post.js")

  pages.data.allPrismicBlog.nodes.forEach(post => {

    console.log(post.uid);

    createPage({
      path: `/blog/${post.uid}`,
      component: template,
      context: {
        uid: post.uid,
      },
    })
  })
}
