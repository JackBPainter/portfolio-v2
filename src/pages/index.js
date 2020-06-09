import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"
import Skills from "../components/Skills"
import About from "../components/About"

const StyledIndexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Index = () => {
  return (
    <Layout>
      <StyledIndexContainer>
        <StyledAboutContainer>
          <About />
        </StyledAboutContainer>
        <StyledAboutContainer>
          <Skills />
        </StyledAboutContainer>
      </StyledIndexContainer>
    </Layout>
  )
}

export default Index