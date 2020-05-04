import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef} from "react"
import styled from 'styled-components'
import { useOnOutsideClick } from "../hooks/useOnOutsideClick";

// Components
import Burger from "./burgerMenu/burger"
import Menu from "./burgerMenu/menu"

// Styled Components
const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false),
    node = useRef()

    useOnOutsideClick(node, () => setOpen(false));

  return (
    <StyledHeader>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
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
