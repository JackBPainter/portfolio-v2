import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"

const StyledH1 = styled.h1`
  font-size: 35px;
  font-weight: 600;
  max-width: 680px;
  text-align: center;
  border: 2px black;
  margin-bottom: 25px;
  transition: all 0.3s linear;
`

const StyledSvgContainer = styled.div`
  position: relative;
  width: 235px;

  svg {
    fill: ${({ theme }) => theme.primaryColor};
    position: absolute;
    width: 35%;
    left: 244px;
    top: -73px;
    transform: rotate(104deg) scaleX(-1);
    transition: all 0.3s linear;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    svg {
      fill: ${({ theme }) => theme.primaryColor};
      position: absolute;
      width: 24%;
      left: 243px;
      top: -74px;
      transform: rotate(98deg) scaleX(-1);
      transition: all 0.3s linear;
    }
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const StyledInput = styled.input`
  border-radius: 2%;
  transition: all 0.3s linear;
  color: ${({ theme }) => theme.secondaryColor};
  background: ${({ theme }) => theme.primaryColor};
  border: none;
  font-family: sans-serif;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
  padding: 10px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.secondaryColor};
    opacity: 1;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.secondaryColor};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.secondaryColor};
  }
`

const StyledMessage = styled.textarea`
  border-radius: 2%;
  transition: all 0.3s linear;
  color: ${({ theme }) => theme.secondaryColor};
  background: ${({ theme }) => theme.primaryColor};
  border: none;
  font-weight: 400;
  font-size: 13.3333px;
  font-family: sans-serif;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
  padding: 10px;
  height: 200px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.secondaryColor};
    opacity: 1;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.secondaryColor};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.secondaryColor};
  }
`

const StyledButton = styled.button`
  border-radius: 8%;
  transition: all 0.3s linear;
  color: ${({ theme }) => theme.secondaryColor};
  background: ${({ theme }) => theme.primaryColor};
  border: none;
  font-weight: 550;
  font-size: 13.3333px;
  font-family: sans-serif;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  padding: 10px;
  width: 70px;
  margin-bottom: 20px;
`

const Contact = () => {
  return (
    <Layout>
      <StyledH1>Contact Me</StyledH1>
      <StyledSvgContainer>
        <svg x="0px" y="0px" viewBox="0 0 511.999 511.999">
          <path d="M403.073,292.074c-20.817-104.643-108.06-179.475-209.15-189.379l59.398-59.399 c9.905-9.905,9.905-25.962,0-35.867c-9.903-9.905-25.962-9.905-35.867,0L111.808,113.074c-0.003,0.003-0.007,0.008-0.012,0.012 c-0.6,0.602-1.172,1.233-1.709,1.892c-0.247,0.301-0.458,0.622-0.688,0.932c-0.257,0.345-0.526,0.681-0.764,1.04 c-0.318,0.477-0.597,0.969-0.879,1.461c-0.123,0.216-0.264,0.426-0.382,0.646c-0.257,0.48-0.477,0.972-0.7,1.464 c-0.118,0.26-0.25,0.512-0.36,0.776c-0.179,0.428-0.323,0.866-0.475,1.302c-0.122,0.348-0.257,0.693-0.367,1.048 c-0.107,0.353-0.184,0.712-0.274,1.067c-0.117,0.45-0.242,0.896-0.331,1.354c-0.054,0.279-0.085,0.56-0.13,0.839 c-0.088,0.536-0.178,1.069-0.233,1.613c-0.024,0.238-0.024,0.479-0.041,0.719c-0.041,0.577-0.083,1.153-0.083,1.736 c-0.002,0.377,0.036,0.754,0.051,1.131c0.02,0.44,0.02,0.876,0.063,1.317c0.079,0.84,0.205,1.677,0.369,2.509 c0.002,0.007,0.002,0.015,0.003,0.024c0.02,0.1,0.052,0.191,0.074,0.291c0.15,0.719,0.323,1.434,0.538,2.139 c0.078,0.259,0.178,0.504,0.264,0.759c0.181,0.531,0.36,1.062,0.575,1.584c0.142,0.342,0.311,0.668,0.465,0.999 c0.191,0.414,0.377,0.83,0.593,1.234c0.215,0.402,0.458,0.785,0.693,1.173c0.191,0.316,0.37,0.639,0.577,0.947 c0.313,0.468,0.656,0.911,0.998,1.354c0.164,0.213,0.313,0.435,0.485,0.644c0.465,0.568,0.96,1.106,1.471,1.628 c0.073,0.074,0.134,0.156,0.208,0.23l0.037,0.037c0.024,0.024,0.046,0.046,0.069,0.069l105.541,105.543 c4.952,4.954,11.443,7.428,17.933,7.428s12.982-2.477,17.933-7.428c9.905-9.903,9.905-25.962,0-35.867l-65.662-65.664 c79.98,7.265,149.228,66.288,165.662,148.91c2.256,11.34,3.431,22.748,3.566,34.088c0.499,41.582-12.985,82.266-38.472,115.461 c-4.636,6.036-9.666,11.824-15.084,17.326c-9.829,9.981-9.702,26.038,0.277,35.867c4.941,4.864,11.369,7.289,17.792,7.289 c6.557,0,13.11-2.526,18.073-7.568c48.279-49.033,72.508-116,67.505-183.583C406.272,311.253,404.977,301.644,403.073,292.074z" />
        </svg>
      </StyledSvgContainer>
      <StyledForm name="Contacted" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success/">
        <input type="hidden" name="form-name" value="Contacted" />
        <StyledInput placeholder="Name" type="text" name="name" />
        <StyledInput placeholder="Email" type="email" name="email" />
        <StyledInput placeholder="Subject" type="text" name="subject" />
        <input aria-label="hidden pot" type="hidden" name="bot-field" />
        <StyledMessage placeholder="Your message" type="text" name="message" />
        <StyledButton type="submit">Send</StyledButton>
      </StyledForm>
    </Layout>
  )
}

export default Contact
