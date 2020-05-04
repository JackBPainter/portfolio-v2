import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import styled from "styled-components"
import { useOnOutsideClick } from "../hooks/useOnOutsideClick"

// Components
import Burger from "./burgerMenu/burger"
import Menu from "./burgerMenu/menu"

// Styled Components
const StyledHeader = styled.header`
  height: 90px;
  background: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 1.45rem;
  z-index: 5;
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false),
    node = useRef()

  useOnOutsideClick(node, () => setOpen(false))

  return (
    <StyledHeader>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
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
