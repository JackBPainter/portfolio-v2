import React, { useContext } from "react"
import { func, string } from "prop-types"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const Toggle = () => {
    const themeContext = useContext(ThemeManagerContext)
    console.log(themeContext)

    return (
        <button onClick={() => themeContext.toggleDark()}>lightMode</button>
    )
}

export default Toggle