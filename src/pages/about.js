import * as React from "react"
import { Link } from "gatsby"
import PageTemplate from "../templates/PageTemplate"

const AboutPage = () => (
  <PageTemplate>
    <h1>Hi from the blog page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go to home</Link> <br />
  </PageTemplate>
)

export default AboutPage
