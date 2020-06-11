import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { string, object } from "prop-types"

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
  width: 350px;
  margin: 10px;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  border-radius: 2%;
  transition: all 0.3s linear;
  background: ${({ theme }) => theme.primaryColor};

  a {
    color: ${({ theme }) => theme.secondaryColor};
    text-decoration-line: none;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
  }
`

const StyledDiv = styled.div`
  height: 155px;
  width: 330px;
  margin-top: 10px;
  border-radius: 2%;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 290px;
  }
`

const StyledSpan = styled.span`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 80px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 290px;
  }
`

const StyledH4 = styled.h4`
  margin: 10px 0px 5px 0px;
`

const StyledP = styled.p`
  margin: 2px 0px;
`

const ProjectBox = ({ title, skills, fluid, repo }) => {
  return (
      <StyledMain>
      <a href={repo} target="_blank" rel="noreferrer">
        <StyledDiv>
          <Img fluid={fluid} />
        </StyledDiv>
        <StyledSpan>
          <StyledH4>{title}</StyledH4>
          <StyledP>
            <strong>Skills used: </strong> {skills}
          </StyledP>
        </StyledSpan>
        </a>
      </StyledMain>
  )
}

ProjectBox.propTypes = {
  title: string.isRequired,
  skills: string.isRequired,
  fluid: object.isRequired,
  repo: string.isRequired,
}

export default ProjectBox
