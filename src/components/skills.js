import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 625px;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  margin-left: 70px;
  border-radius: 5%;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  transition: all 0.3s linear;

  svg {
    height: 115px;
    width: 130px;
    margin-bottom: 10px;
  }

  path {
    fill: ${({ theme }) => theme.secondaryColor};
  }

  circle {
    stroke: ${({ theme }) => theme.secondaryColor};
  }
`

const StyledH1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  margin-bottom: 15px;
`

const StyledSpan = styled.span`
  margin: 0 auto;
  width: 290px;
  margin-bottom: 20px;
  text-align: center;
`

const StyledH3 = styled.h3`

`

const StyledSpanSkills = styled.span`
  margin: 0 auto;
  text-align: center;
`

const StyledSpanSecondarySkills = styled.span`
  width: 75px;
`

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___title, order: DESC }) {
        edges {
          node {
            frontmatter {
              primary_skills
              secondary_skills
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <StyledDiv>
      <svg>
        <g>
          <g>
            <circle
              cx="24.553"
              cy="32"
              fill="none"
              r="0.5"
              stroke="#323638"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <circle
              cx="29.953"
              cy="32"
              fill="none"
              r="0.5"
              stroke="#323638"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <circle
              cx="35.353"
              cy="32"
              fill="none"
              r="0.5"
              stroke="#323638"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </g>
          <g>
            <path
              d="M104,25.5H24c-3.309,0-6,2.691-6,6v65c0,3.309,2.691,6,6,6h80c3.309,0,6-2.691,6-6v-65    C110,28.191,107.309,25.5,104,25.5z M24,27.5h80c2.206,0,4,1.794,4,4v5.655H20V31.5C20,29.294,21.794,27.5,24,27.5z M104,100.5H24    c-2.206,0-4-1.794-4-4V39.155h88V96.5C108,98.706,106.206,100.5,104,100.5z"
              fill="#323638"
            />
            <path
              d="M77.339,57.638c-0.433-0.342-1.062-0.269-1.405,0.162c-0.343,0.433-0.271,1.062,0.162,1.405L89.076,69.5    l-12.98,10.294c-0.433,0.343-0.505,0.972-0.162,1.405c0.198,0.249,0.49,0.378,0.784,0.378c0.218,0,0.437-0.071,0.621-0.216    l13.968-11.078c0.239-0.19,0.378-0.479,0.378-0.784s-0.14-0.594-0.378-0.784L77.339,57.638z"
              fill="#323638"
            />
            <path
              d="M52.066,57.8c-0.344-0.432-0.972-0.504-1.405-0.162L36.693,68.716c-0.239,0.19-0.378,0.479-0.378,0.784    s0.14,0.594,0.378,0.784l13.968,11.078c0.184,0.146,0.403,0.216,0.621,0.216c0.294,0,0.586-0.13,0.784-0.378    c0.343-0.433,0.271-1.062-0.162-1.405L38.924,69.5l12.98-10.294C52.337,58.862,52.409,58.233,52.066,57.8z"
              fill="#323638"
            />
            <path
              d="M73.086,48.586c-0.506-0.225-1.096,0.004-1.319,0.509l-17.722,40c-0.224,0.505,0.004,1.096,0.509,1.319    c0.132,0.059,0.27,0.086,0.405,0.086c0.383,0,0.75-0.222,0.915-0.595l17.722-40C73.819,49.4,73.591,48.81,73.086,48.586z"
              fill="#323638"
            />
          </g>
        </g>
      </svg>
      <StyledH1>Front-End Developer</StyledH1>
      <StyledSpan>
        {data.allMarkdownRemark.edges[0].node.rawMarkdownBody}
      </StyledSpan>
      <StyledH3>Primary Skills:</StyledH3>
      <StyledSpanSkills>
        {data.allMarkdownRemark.edges[0].node.frontmatter.primary_skills}
      </StyledSpanSkills>
      <StyledH3>Secondary Skills:</StyledH3>
      <StyledSpanSecondarySkills>{data.allMarkdownRemark.edges[0].node.frontmatter.secondary_skills}</StyledSpanSecondarySkills>
    </StyledDiv>
  )
}

export default Skills
