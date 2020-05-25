import React, { useState } from "react"

// Components
import Layout from "../components/Layout"

const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState(0)

  return (
    <Layout>
      <form name="contact">
        <label>
          First Name
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Number
          <input type="number" name="number" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}

export default Contact
