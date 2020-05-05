import React, { useContext } from "react"
import { func, string } from "prop-types"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const Toggle = ({ theme, toggleTheme }) => {
    const themeContext = useContext(ThemeManagerContext)

    return (
        <button onClick={() => themeContext.toggleDark()}>lightMode</button>
    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle