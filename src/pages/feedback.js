import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const FeedbackPage = () => {
  return (
    <Layout>
      <Seo title="Feedback" />
      <h1>Send me your feedback!</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default FeedbackPage
