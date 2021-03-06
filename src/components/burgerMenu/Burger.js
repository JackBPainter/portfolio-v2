import React from "react"
import styled from "styled-components"
import { bool, func } from "prop-types"

const StyledBurger = styled.button`
  position: absolute;
  top: 30px;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 15;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 5px;
    background: ${({ theme }) => theme.secondaryColor };
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 2px;

    :first-child {
      transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? "0" : "1"};
      transform: ${({ open }) => open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const Burger = React.forwardRef(({ open, setOpen }, ref)  => {
  return (
    <StyledBurger ref={ref} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
})

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default Burger
