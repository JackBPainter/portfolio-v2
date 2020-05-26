import React, { useState } from "react"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const StyledInput = styled.input`
  border-radius: 2%;
  border: none;
  font-family: sans-serif;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  margin-bottom: 20px;
  padding: 10px;
`

const StyledMessage = styled.textarea`
  border-radius: 2%;
  border: none;
  font-weight: 400;
  font-size: 13.3333px;
  font-family: sans-serif;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  margin-bottom: 10px;
  padding: 10px;
  height: 200px;
`

const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState(0)

  return (
    <Layout>
      <StyledForm name="contact">
          <StyledInput placeholder="Name" type="text" name="name" />
          <StyledInput placeholder="Email" type="email" name="email" />
          <StyledInput placeholder="Number" type="number" name="number" />
          <StyledInput placeholder="Subject" type="text" name="subject" />
          <StyledMessage placeholder="Your message" type="text" name="message" />
        <button type="submit">Submit</button>
      </StyledForm>
    </Layout>
  )
}

export default Contact
