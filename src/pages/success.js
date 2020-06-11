import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Components
import Layout from "../components/Layout"

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s linear;
  height: 300px;
  width: 300px;
  margin-top: 60px;
  border-radius: 3%;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  background: ${({ theme }) => theme.primaryColor};

  svg {
    fill: ${({ theme }) => theme.secondaryColor};
    transition: all 0.3s linear;

    &:hover {
      fill: ${({ theme }) => theme.primaryHover};
    }
  }
`

const StyledH1 = styled.h1`
  font-size: 35px;
  font-weight: 600;
  max-width: 280px;
  color: ${({ theme }) => theme.secondaryColor};
  transition: all 0.3s linear;
  text-align: center;
  align-items: center;
`

const Success = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default Success
