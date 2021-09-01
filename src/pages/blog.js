import { graphql, Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <Seo title="Blogs" />
    <h1>Blogs here!</h1>
    {data.allPrismicBlog.edges.map(blog => {
      return (
        <div key={blog.node.id}>
          <h3>{blog.node.data.title.text}</h3>
          <br />
          <Link to={`${blog.node.uid}`}>Открыть</Link>
          <br />
          <br />
          <hr />
        </div>
      )
    })}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allPrismicBlog {
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`

export default BlogPage
