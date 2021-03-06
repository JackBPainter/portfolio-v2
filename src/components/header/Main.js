import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import styled from "styled-components"
import { useOnOutsideClick } from "../../hooks/useOnOutsideClick"

// Components
import Burger from "../burgerMenu/Burger"
import Menu from "../burgerMenu/Menu"
import Buttons from "./Buttons"

// Styled Components
const StyledHeader = styled.header`
  position: relative;
  top: 0;
  height: 90px;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 55px;
  transition: all 0.3s linear;
  z-index: 15;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: ${({ open }) => open ? 'sticky' : 'relative'};
  }
`

const StyledTitle = styled.div`
  position: absolute;
  top: 5px;
  left: 100px;
  transition: all 0.3s linear;
  transform: ${({ open }) => open ? 'translateX(26%)' : 'translateX(0)'};
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    opacity: 0;
    width: 0px;
  }
`

const StyledH1 = styled.h1`
  padding: 0;
  margin: 0;
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const node2 = useRef()

  useOnOutsideClick(node, node2, () => setOpen(false))

  return (
    <StyledHeader open={open}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <StyledTitle open={open}>
        <StyledH1>{siteTitle}</StyledH1>
      </StyledTitle>
      <Buttons ref={node2} />
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
