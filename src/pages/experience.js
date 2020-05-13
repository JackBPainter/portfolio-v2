import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"

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

  em {
      font-weight: 400;
      font-size: 25px;
      margin-top: 8px;
  }
`

const StyledP = styled.p`
  font-size: 17px;
  max-width: 700px;
`

const Experience = ({ data }) => {
  console.log(data)
  const calibrateData = data.allMarkdownRemark.edges[1].node
  const kodiriData = data.allMarkdownRemark.edges[3].node
  const earlyData = data.allMarkdownRemark.edges[2].node

  return (
    <Layout>
      <StyledDiv>
        <span>
          <StyledH1>{calibrateData.frontmatter.title}  <em>{calibrateData.frontmatter.dates}</em></StyledH1>
          <StyledP><strong>Primary Skills: </strong>{calibrateData.frontmatter.skills}</StyledP>
          <StyledP>{calibrateData.rawMarkdownBody}</StyledP>
        </span>
        <span>
            <StyledH1>{kodiriData.frontmatter.title}  <em>{kodiriData.frontmatter.dates}</em></StyledH1>
            <StyledP><strong>Primary Skills: </strong>{kodiriData.frontmatter.skills}</StyledP>
            <StyledP>{kodiriData.rawMarkdownBody}</StyledP>
        </span>
        <span>
            <StyledH1>{earlyData.frontmatter.title}  <em>{earlyData.frontmatter.dates}</em></StyledH1>
            <StyledP>{earlyData.rawMarkdownBody}</StyledP>
        </span>
      </StyledDiv>
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
