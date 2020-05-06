import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import styled from "styled-components"
import { useOnOutsideClick } from "../../hooks/useOnOutsideClick"

// Components
import Burger from "../burgerMenu/burger"
import Menu from "../burgerMenu/menu"
import Buttons from "./buttons"

// Styled Components
const StyledHeader = styled.header`
  position: relative;
  height: 90px;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 1.45rem;
`

const StyledTitle = styled.div`
  position: absolute;
  top: 5px;
  left: 100px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(25%)' : 'translateX(0)'};
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledH1 = styled.h1`
  padding: 0;
  margin: 0;
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useOnOutsideClick(node, () => setOpen(false))

  return (
    <StyledHeader>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <StyledTitle open={open}>
        <StyledH1>{siteTitle}</StyledH1>
      </StyledTitle>
      <Buttons />
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
