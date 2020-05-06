import React, { useContext } from "react"
import { func, string } from "prop-types"
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
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 70px;
  height: 35px;
`

const StyledCircle = styled.em`
    position: absolute;
    background: blue;
    border-radius: 100%;
    top: 7.5px;
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

// Dynamically change the dark mode text based on opposite to current theme(use isDark from themeContext)

// <button onClick={() => themeContext.toggleDark()}>lightMode</button>
