import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 400px;
  height: 625px;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  margin-left: 70px;
  border-radius: 5%;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  box-sizing: border-box;
  transition: all 0.3s linear;
`

export const Skills = () => {
  return <StyledDiv></StyledDiv>
}
