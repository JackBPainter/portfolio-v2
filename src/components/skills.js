import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 730px;
  height: 325px;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  border-radius: 10%;
`

export const Skills = () => {
  return <StyledDiv></StyledDiv>
}
