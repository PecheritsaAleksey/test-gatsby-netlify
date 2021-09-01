import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Post = ({ data }) => {
  if (!data) return null
  const post = data.prismicBlog

  return (
    <Layout>
      <Link to={"/blog"}>Вернуться</Link>
      <hr />
      <h1>{post.data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.data.text.html }} />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicBlog(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        text {
          html
        }
      }
    }
  }
`
