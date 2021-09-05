import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import CvImage from '../images/CV.png';
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Cv = ({ data }) => {
    return (
      <Layout>
        <SEO title="CV" />
        <Content>
          <h1>My CV</h1>
          <img src={CvImage} alt="Cv" />
        </Content>
      </Layout>
    )
  }

export default Cv