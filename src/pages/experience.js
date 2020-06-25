import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"

const StyledDiv = styled.div` 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`

const StyledH1 = styled.h1`
  margin: 0 0 10px 0;
  font-size: 35px;
  font-weight: 600;
  max-width: 680px;
  transition: all 0.3s linear;
`

const StyledSpan = styled.span`
  margin: 15px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 25px;
  }
`

const StyledH2 = styled.h2`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 10px 0;
  font-size: 30px;
  font-weight: 600;
  max-width: 680px;
  align-items: center;
  transition: all 0.3s linear;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }

  em {
    font-weight: 400;
    font-size: 25px;
  }
`

const StyledP = styled.p`
  font-size: 17px;
  max-width: 700px;
  transition: all 0.3s linear;
`

const Experience = ({ data }) => {
  const calibrateData = data.allMarkdownRemark.edges[1].node
  const kodiriData = data.allMarkdownRemark.edges[4].node
  const earlyData = data.allMarkdownRemark.edges[3].node

  return (
    <Layout>
      <StyledDiv>
        <StyledH1>Experience</StyledH1>
        <StyledSpan>
          <StyledH2>{calibrateData.frontmatter.title}  <em>{calibrateData.frontmatter.dates}</em></StyledH2>
          <StyledP><strong>Primary Skills: </strong>{calibrateData.frontmatter.skills}</StyledP>
          <StyledP>{calibrateData.rawMarkdownBody}</StyledP>
        </StyledSpan>
        <StyledSpan>
            <StyledH2>{kodiriData.frontmatter.title}  <em>{kodiriData.frontmatter.dates}</em></StyledH2>
            <StyledP><strong>Primary Skills: </strong>{kodiriData.frontmatter.skills}</StyledP>
            <StyledP>{kodiriData.rawMarkdownBody}</StyledP>
        </StyledSpan>
        <StyledSpan>
            <StyledH2>{earlyData.frontmatter.title}  <em>{earlyData.frontmatter.dates}</em></StyledH2>
            <StyledP>{earlyData.rawMarkdownBody}</StyledP>
        </StyledSpan>
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
