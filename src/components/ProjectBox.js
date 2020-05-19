import React from "react"
import styled from "styled-components"

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    width: 350px;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    border-radius: 2%;
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 300px
  }
`

const StyledDiv = styled.div`
    height: 160px;
    width: 340px;
    margin-top: 10px;
    border-radius: 2%;
    background: ${({ theme }) => theme.secondaryColor};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 290px
  }
`

const StyledSpan = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 340px;


    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 290px
  }
`

const StyledH4 = styled.h4`
    margin: 10px 0px 5px 0px;
`

const StyledP = styled.p`   
    margin: 5px 0px;
`

const ProjectBox = () => {
    return (
        <StyledMain>
            <StyledDiv />
            <StyledSpan>
                <StyledH4>Project Example</StyledH4>
                <StyledP>Example blah blah blah</StyledP>
            </StyledSpan>
        </StyledMain>
    )
}

export default ProjectBox