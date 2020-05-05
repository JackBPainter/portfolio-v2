import React from "react"
import { func, string } from "prop-types"
import styled from "styled-components"

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light'
    console.log(theme)

    return (
        <button onClick={toggleTheme}>lightMode</button>
    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle