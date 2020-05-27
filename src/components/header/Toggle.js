import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const StyledSliderContainer = styled.button`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.toggleBackground};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 60px;
  height: 32px;
`

const StyledCircle = styled.em`
    position: absolute;
    background: ${({ isDark }) => isDark ? '#FFFFFF' : 'black'};
    color: ${({ isDark }) => isDark ? 'black' : '#FFFFFF'};
    border-radius: 100%;
    transition: all 0.2s linear;
    font-size: 0.5rem;
    top: 5.5px;
    left: ${({ isDark }) => isDark ? '30px': '6.5px'};
    height: 17.5px;
    width: 17.5px;
`

const Toggle = () => {
  const themeContext = useContext(ThemeManagerContext)

  return (
      <StyledSliderContainer onClick={() => themeContext.toggleDark()}>
        <StyledCircle isDark={themeContext.isDark}></StyledCircle>
      </StyledSliderContainer>
  )
}

export default Toggle