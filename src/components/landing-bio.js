import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { SocialIcon } from "react-social-icons"

import Typist from "react-typist"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 3rem;
  font-size: 1.4rem;
  min-height: 25px;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 15px;
`

const SocialLinks = styled.div`
  width: 100%;
  display: inline-block;
`
const Social = { marginRight: "10px" }

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <Container>
          <NameHeader>
            <Typist cursor={{ hideWhenDone: true }}>Tommaso Manzana</Typist>
          </NameHeader>
          <Description>
            <Typist cursor={{ hideWhenDone: true }}>
              <Typist.Delay ms={1500} />
              Student
              <Typist.Backspace count={7} delay={1000} />
              {data.site.siteMetadata.subtitle}
              <Typist.Backspace count={18} delay={1000} />
              ML enthusiast
              <Typist.Backspace count={13} delay={1000} />
            </Typist>
          </Description>
        </Container>
        <Container>
          <SocialLinks>
            <SocialIcon
              style={Social}
              url="https://twitter.com/TommasoManzana"
            />
            <SocialIcon
              style={Social}
              url="https://www.linkedin.com/in/tommaso-manzana/"
            />
            <SocialIcon url="https://www.instagram.com/tommaso.manzana/" />
          </SocialLinks>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
