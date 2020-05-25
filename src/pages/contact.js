import React, { useState } from "react"
import Layout from "../components/layout"

const Contact = () => {
  // An input form whose value is controlled by React is known as a controlled component
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
