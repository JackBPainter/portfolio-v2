import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

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
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 300px
  }
`

const StyledDiv = styled.div`
    height: 155px;
    width: 330px;
    margin-top: 10px;
    border-radius: 2%;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 290px
  }
`

const StyledSpan = styled.span`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 80px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 290px
  }
`

const StyledH4 = styled.h4`
    margin: 10px 0px 5px 0px;
    text-align: center;
`

const StyledP = styled.p`   
    margin: 2px 0px;
    text-align: center;
`

const ProjectBox = ({ title, skills, fluid }) => {
    return (
        <StyledMain>
            <StyledDiv>
                <Img fluid={fluid} />
            </StyledDiv>
            <StyledSpan>
                <StyledH4>{title}</StyledH4>
                <StyledP>{skills}</StyledP>
            </StyledSpan>
        </StyledMain>
    )
}

export default ProjectBox