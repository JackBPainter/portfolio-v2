import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Components
import Layout from "../components/Layout"

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -7px -7px 0 -7px;
  background: lightgray;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s linear;
  height: 300px;
  width: 300px;
  border-radius: 3%;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  background: black;

  svg {
    fill: white;
    transition: all 0.3s linear;

    &:hover {
      fill: ${({ theme }) => theme.primaryHover};
      transition: none;
    }
  }
`

const StyledH1 = styled.h1`
  font-size: 35px;
  font-weight: 600;
  max-width: 280px;
  color: white;
  transition: all 0.3s linear;
  text-align: center;
  align-items: center;
`

const Success = () => {
  return (
    <StyledMain>
      <StyledDiv>
        <StyledH1>
          Thanks for reaching out, I will get back to you soon!
        </StyledH1>
        <Link to="/">
          <svg height="55px" width="63px">
            <polygon points="32,-0.32 0.68,31 11,31 11,55 25,55 25,41 38,41 38,55 52,55 52,31 63.319,31 " />
          </svg>
        </Link>
      </StyledDiv>
    </StyledMain>
  )
}

export default Success
