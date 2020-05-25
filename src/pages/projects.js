import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"
import ProjectBox from "../components/ProjectBox"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

const StyledH1 = styled.h1`
  display: flex;
  justify-content: space-between;
  font-size: 35px;
  font-weight: 600;
  max-width: 680px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

const StyledSpan = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 750px;
`

const Projects = ({ data }) => {
  const tetris = data.allMarkdownRemark.edges[7].node
  const programateur = data.allMarkdownRemark.edges[6].node
  const originalPortfolio = data.allMarkdownRemark.edges[5].node
  const currentPortfolio = data.allMarkdownRemark.edges[2].node

  return (
    <Layout>
      <StyledDiv>
        <StyledH1>Projects</StyledH1>
        <StyledSpan>
          <ProjectBox
            title={tetris.frontmatter.title}
            skills={tetris.frontmatter.skills}
          />
          <ProjectBox
            title={programateur.frontmatter.title}
            skills={programateur.frontmatter.skills}
          />
          <ProjectBox
            title={originalPortfolio.frontmatter.title}
            skills={originalPortfolio.frontmatter.skills}
          />
          <ProjectBox 
            title={currentPortfolio.frontmatter.title}
            skills={currentPortfolio.frontmatter.skills}
          />
        </StyledSpan>
      </StyledDiv>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___title }) {
      edges {
        node {
          frontmatter {
            title
            skills
          }
        }
      }
    }
  }
`
