import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import ProjectBox from "../components/ProjectBox"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledH1 = styled.h1`
  font-size: 35px;
  font-weight: 600;
  max-width: 680px;
  transition: all 0.3s linear;
`

const StyledSpan = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 750px;
  transition: all 0.3s linear;
`

const Projects = ({ data }) => {
  const tetris = data.allMarkdownRemark.edges[0].node
  const programateur = data.allMarkdownRemark.edges[1].node
  const originalPortfolio = data.allMarkdownRemark.edges[2].node
  const currentPortfolio = data.allMarkdownRemark.edges[3].node

  return (
    <Layout>
      <StyledDiv>
        <StyledH1>Projects</StyledH1>
        <StyledSpan>
          <ProjectBox
            title={tetris.frontmatter.title}
            skills={tetris.frontmatter.skills}
            fluid={tetris.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <ProjectBox
            title={programateur.frontmatter.title}
            skills={programateur.frontmatter.skills}
            fluid={programateur.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <ProjectBox
            title={originalPortfolio.frontmatter.title}
            skills={originalPortfolio.frontmatter.skills}
            fluid={originalPortfolio.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <ProjectBox
            title={currentPortfolio.frontmatter.title}
            skills={currentPortfolio.frontmatter.skills}
            fluid={currentPortfolio.frontmatter.featuredImage.childImageSharp.fluid}
          />
        </StyledSpan>
      </StyledDiv>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___featuredImage___name }) {
      edges {
        node {
          frontmatter {
            title
            skills
            featuredImage {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  sizes
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
