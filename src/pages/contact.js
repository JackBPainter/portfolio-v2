import React, { useState } from "react"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  border-radius: 2%;
  border: none;
`

const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState(0)

  return (
    <Layout>
      <StyledForm name="contact">
          <StyledInput placeholder="First Name" type="text" name="firstName" />
          <StyledInput placeholder="Last Name" type="text" name="lastName" />
          <StyledInput placeholder="Email" type="email" name="email" />
          <StyledInput placeholder="Number" type="number" name="number" />
        <button type="submit">Submit</button>
      </StyledForm>
    </Layout>
  )
}

export default Contact
