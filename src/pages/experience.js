import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"

const Experience = ({ data }) => {
    console.log(data)

    return (
        <Layout>

        </Layout>
    )
}

export default Experience 

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          rawMarkdownBody
        }
      }
    }
  }
`