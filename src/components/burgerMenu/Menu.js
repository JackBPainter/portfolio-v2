import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { bool } from "prop-types"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryColor};
  height: 100vh;
  text-align: left;
  padding: 40px;
  position: fixed;
  left: 0;
  transition: all 0.3s linear;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 5px;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.secondaryColor};
    transition: all 0.3s linear;
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`

const Menu = React.forwardRef(({ open }, ref) => {

  return (
    <StyledMenu ref={ref} open={open}>
      <Link to="/">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </StyledMenu>
  )
})

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
