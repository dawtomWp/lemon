import * as React from "react"
import MainTemplate from "../templates/MainTemplate"
import Seo from "../components/organisms/Seo"
import { Banner } from "../components/molecules/Banner"
import { ContentCards } from "../components/organisms/ContentCards"
import { LatestPost } from "../components/organisms/LatestPosts"
import { CompanyMission } from "../components/organisms/CompanyMission"
import { Faq } from "../components/organisms/Faq"

const IndexPage = () => (
  <MainTemplate>
    <Seo title="Gatsby-boilerplate" />
    <Banner />
    <CompanyMission />
    <ContentCards />
    <LatestPost />
    <Faq/>
  </MainTemplate>
)

export default IndexPage
