import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/layout"
import ProjectBox from "../components/projectBox"

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 850px;
`

const Projects = () => {
    return (
        <Layout>
          <StyledH1>Projects</StyledH1>
          <StyledDiv>
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
          </StyledDiv>
        </Layout>
    )
}

export default Projects