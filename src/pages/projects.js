import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/layout"
import ProjectBox from "../components/projectBox"

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

const Projects = () => {
  return (
    <Layout>
      <StyledDiv>
        <StyledH1>Projects</StyledH1>
        <StyledSpan>
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </StyledSpan>
      </StyledDiv>
    </Layout>
  )
}

export default Projects
