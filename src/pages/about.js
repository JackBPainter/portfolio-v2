import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/layout"

// Images
import Face from "../images/face.jpeg"

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledImgContainer = styled.div`
  flex: 1;
  margin: 20px;
  width: 250px;
  height: 250px;
  box-sizing: border-box;
  background: white;
  border-radius: 5%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
`

const StyledImg = styled.img`
    width: 105%;
    height: 125%;
`

const StyledH1 = styled.h1`
  font-weight: 600;
  text-align: center;
  margin: 20px;
`

const StyledP = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 20px;
`

const About = () => {
  return (
    <Layout>
        <StyledAboutContainer>
          <StyledImgContainer>
            <StyledImg src={Face} alt="My Face" />
          </StyledImgContainer>
          <StyledH1 className="About-header">About Me</StyledH1>
          <StyledP>
            Hey I'm Jack, an enthusiastic and passionate junior full-stack
            developer. After more than 4 years of working on the sales side of
            IT, I decided enough was enough and made the decision to drop it all
            and become a developer.
            <br />
            <br />
            I have just completed a 2-month agile full-stack development course
            with Kodiri where I predominately worked with JavaScript, React,
            Node, HTML and CSS. I made a Netflix clone, bill calulator and a
            messaging application whilst there and I am now planning to create a
            Tetris application using hook based functional components.
            <br />
            <br />
            When I'm not coding you'll find me playing about with my DSLR (any
            tips would be very welcome), gaming, listening to vinyls, attending
            meetups and following the Formula 1 & football.
          </StyledP>
        </StyledAboutContainer>
    </Layout>
  )
}

export default About
