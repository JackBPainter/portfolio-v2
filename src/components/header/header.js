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
  margin-bottom: 1.45rem;
`

// const StyledImg = styled.img`
//   width: 45px;
//   height: 45px;
//   color: ${({ theme }) => theme.secondaryColor};
// `

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
