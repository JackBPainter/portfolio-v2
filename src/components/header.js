import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import styled from "styled-components"
import { useOnOutsideClick } from "../hooks/useOnOutsideClick"
import { useToggleTheme } from "../hooks/useToggleTheme"

// Components
import Burger from "./burgerMenu/burger"
import Menu from "./burgerMenu/menu"
import Toggle from "./Toggle"


// Styled Components
const StyledHeader = styled.header`
  position: relative;
  height: 90px;
  background: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 1.45rem;
  z-index: 5;
`

const StyledButtonContainer = styled.div`
  top: 30px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 2rem;
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const [theme, toggleTheme] = useToggleTheme()

  useOnOutsideClick(node, () => setOpen(false))

  return (
    <StyledHeader>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <StyledButtonContainer>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </StyledButtonContainer>  
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
