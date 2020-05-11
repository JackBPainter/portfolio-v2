import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"

const StyledH1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin: 20px;
`

const StyledH3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 20px;
`

const StyledP = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
`

const Experience = ({ data }) => {
  console.log(data.allMarkdownRemark.edges[3])

  return (
    <Layout>
      <div>
        <span>
          <StyledH1>{data.allMarkdownRemark.edges[1].node.frontmatter.title}</StyledH1>
          <StyledH3>{data.allMarkdownRemark.edges[1].node.frontmatter.dates}</StyledH3>
          <StyledP>{data.allMarkdownRemark.edges[1].node.frontmatter.skills}</StyledP>
          <StyledP>{data.allMarkdownRemark.edges[1].node.rawMarkdownBody}</StyledP>
        </span>
        <span>
            <StyledH1>{data.allMarkdownRemark.edges[2].node.frontmatter.title}</StyledH1>
            <StyledH3>{data.allMarkdownRemark.edges[2].node.frontmatter.dates}</StyledH3>
            <StyledP>{data.allMarkdownRemark.edges[2].node.frontmatter.skills}</StyledP>
            <StyledP>{data.allMarkdownRemark.edges[2].node.rawMarkdownBody}</StyledP>
        </span>
        <span>
            <StyledH1>{data.allMarkdownRemark.edges[3].node.frontmatter.title}</StyledH1>
            <StyledH3>{data.allMarkdownRemark.edges[3].node.frontmatter.dates}</StyledH3>
            <StyledP>{data.allMarkdownRemark.edges[3].node.frontmatter.skills}</StyledP>
            <StyledP>{data.allMarkdownRemark.edges[3].node.rawMarkdownBody}</StyledP>
        </span>
      </div>
    </Layout>
  )
}

export default Experience

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            dates
            skills
          }
          rawMarkdownBody
        }
      }
    }
  }
`
