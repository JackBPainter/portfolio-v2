import React from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../styles/theme"
import { GlobalStyles } from "../styles/global"
import { useToggleTheme } from "../hooks/useToggleTheme"

// Components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Index = () => {
  const [theme] = useToggleTheme()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  console.log(themeMode)

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}

export default Index

        {/*<SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
  </div> */}
