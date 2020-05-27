import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Components
import Layout from "../components/Layout"
import SEO from "../components/seo"

const StyledH1 = styled.h1`
  font-size: 35px;
  font-weight: 600;
  transition: all 0.3s linear;
  margin-bottom: none;
  text-align: center;

  a {
    color: ${({ theme }) => theme.secondaryColor};
    transition: color 0.3s linear;
    cursor: pointer;
    text-decoration-line: underline;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`

const StyledP = styled.p`
  font-size: 10px;
  transition: all 0.3s linear;
  text-align: center;
`

const NotFoundPage = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <Layout>
      <SEO title="404: Not found" />
      <StyledH1>It seems you are unable to type correctly...</StyledH1>
      <StyledP>or maybe it's an error my side</StyledP>
      <StyledH1>
        Either way, click <a onClick={e => setClicked(true)}>here</a> to read all about me again
      </StyledH1>
      {
        clicked ? 
          <>
            <StyledP>*Sigh*</StyledP>
            <StyledH1>Click <Link to="/">here</Link> for about</StyledH1>
          </>
          : ""
      }
    </Layout>
  )
}

export default NotFoundPage
