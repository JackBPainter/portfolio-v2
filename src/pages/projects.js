import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/layout"

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

const Projects = () => {
    return (
        <Layout>
          <StyledH1>Projects</StyledH1>
        </Layout>
    )
}

export default Projects