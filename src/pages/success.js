import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"

const StyledH1 = styled.h1`
  margin: 0 auto;
  font-size: 35px;
  font-weight: 600;
  margin-top: 60px;
  max-width: 480px;
  transition: all 0.3s linear;
  text-align: center;
  align-items: center;
`

const Success = () => {
    return (
        <Layout>
            <StyledH1>Thanks for reaching out, I will get back to you soon!</StyledH1>
        </Layout>
    )
}

export default Success