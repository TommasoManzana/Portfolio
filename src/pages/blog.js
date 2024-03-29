import React from "react"
import { Link, graphql } from "gatsby"
// import { css } from "@emotion/core"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Seo from "../components/seo"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const MarkerHeader = styled.h3`
  display: inline;
  // border-radius: 1em 0 1em 0;
  // background-image: linear-gradient(
  //   -100deg,
  //   rgba(255, 250, 150, 0.15),
  //   rgba(255, 250, 150, 0.8) 100%,
  //   rgba(255, 250, 150, 0.25)
  // );
`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`

const IndexPage = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Seo title="Projects" />
      <Content>
        <h1>Projects</h1>
        {data.allMdx.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id}>
              <AniLink 
                paintDrip 
                to={node.frontmatter.path}
                duration={0.5}
                color="rebeccapurple"
                css={css`
                text-decoration: none;
                color: inherit;
              `}
              >
                <MarkerHeader>{node.frontmatter.title}</MarkerHeader>
              </AniLink>

              {/* <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <MarkerHeader>{node.frontmatter.title}</MarkerHeader>
              </Link> */}
              <div>
                <ArticleDate>{node.frontmatter.date}</ArticleDate>
                <ReadingTime> - {node.frontmatter.category}</ReadingTime>
              </div>
              <p>{node.excerpt}</p>
            </div>
          ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
            category
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
