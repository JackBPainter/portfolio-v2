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
  console.log(data)
  const calibrateData = data.allMarkdownRemark.edges[1].node
  const kodiriData = data.allMarkdownRemark.edges[3].node
  const earlyData = data.allMarkdownRemark.edges[2].node

  return (
    <Layout>
      <div>
        <span>
          <StyledH1>{calibrateData.frontmatter.title}</StyledH1>
          <StyledH3>{calibrateData.frontmatter.dates}</StyledH3>
          <StyledP>{calibrateData.frontmatter.skills}</StyledP>
          <StyledP>{calibrateData.rawMarkdownBody}</StyledP>
        </span>
        <span>
            <StyledH1>{kodiriData.frontmatter.title}</StyledH1>
            <StyledH3>{kodiriData.frontmatter.dates}</StyledH3>
            <StyledP>{kodiriData.frontmatter.skills}</StyledP>
            <StyledP>{kodiriData.rawMarkdownBody}</StyledP>
        </span>
        <span>
            <StyledH1>{earlyData.frontmatter.title}</StyledH1>
            <StyledH3>{earlyData.frontmatter.dates}</StyledH3>
            <StyledP>{earlyData.frontmatter.skills}</StyledP>
            <StyledP>{earlyData.rawMarkdownBody}</StyledP>
        </span>
      </div>
    </Layout>
  )
}

export default Experience

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___title}) {
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
