import React from "react"
import styled from "styled-components"

// Components
import Toggle from "./Toggle"

const StyledButtonContainer = styled.div`
  top: 30px;
  width: 155px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 2rem;
  z-index: 15;
`

const StyledGithubContainer = styled.a`
  width: 32px;

  path:first-child {
    fill: ${({ theme }) => theme.secondaryColor};
    transition: all 0.3s linear;
  }

  path {
   fill: ${({ theme }) => theme.primaryColor};
   transition: all 0.3s linear;
  }

  &:hover {
    path:first-child {
      fill: ${({ theme }) => theme.primaryHover};
      transition: none;
    }
  }
`

const StyledLinkedInContainer = styled.a`
  width: 32px;
  fill: ${({ theme }) => theme.secondaryColor};
  transition: all 0.3s linear;

  &:hover {
    fill: ${({ theme }) => theme.primaryHover};
    transition: none;
  }
`

const Buttons = () => {
  return (
    <StyledButtonContainer>
      <StyledGithubContainer
        href="https://github.com/JackBPainter"
        target="_blank"
      >
        <svg id="Layer_1" version="1.1" viewBox="0 0 50 50">
          <path d="M45,0.75H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,5h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z" />
          <path
            d="M30.4,40h-4h-4c0,0,0-2.4,0-4c-5.5,1.2-7-3-7-3c-1-2-2-3-2-3c-2-1.2,0-1,0-1c2,0,3,2,3,2  c1.8,3,4.9,2.5,6,2c0-1,0.4-2.5,1-3c-4.4-0.5-8-3-8-8s1-6,2-7c-0.2-0.5-1-2.3,0-5c0,0,2,0,4,3c1-1,4-1,5-1c1,0,4,0,5,1c2-3,4-3,4-3  c1.1,2.7,0.2,4.5,0,5c1,1,2,2,2,7s-3.6,7.5-8,8c0.6,0.5,1,2.2,1,3L30.4,40L30.4,40z"
            id="Cat_2_"
          />
        </svg>
      </StyledGithubContainer>
      <StyledLinkedInContainer
        href="https://linkedin.com/in/painterjack/"
        target="_blank"
      >
        <svg id="Layer_1" version="1.1" viewBox="0 0 512 512">
          <g>
            <path d="M332.051,176.916c24.504,0,45.362,8.772,62.607,25.707   c14.518,14.82,21.474,36.289,21.474,64.714v163.317h-61.398V322.381c0-29.327-1.511-48.99-3.928-58.676   c-2.717-9.67-7.258-17.231-13.912-22.069c-6.653-5.14-14.818-7.562-24.493-7.562c-12.403,0-23.295,3.935-32.366,12.399   c-9.069,8.47-15.121,19.966-18.744,34.786c-1.822,7.849-2.729,24.485-2.729,50.202v99.192H196.57V182.965h61.992v25.706   c14.215-11.794,26.92-19.961,38.416-24.798C308.464,179.338,319.961,176.916,332.051,176.916L332.051,176.916z M25.701,512h460.89 c13.912,0,25.409-11.48,25.409-25.403V25.706C512,11.491,500.503,0,486.591,0H25.701C11.486,0,0,11.491,0,25.706v460.891 C0,500.519,11.486,512,25.701,512L25.701,512z M135.482,81.35c10.883,0,20.265,3.93,28.128,11.794   c7.862,7.864,11.486,17.539,11.486,28.732c0,10.886-3.624,20.264-11.486,28.123c-7.561,7.864-16.943,11.497-27.826,11.497   s-20.265-3.935-28.127-11.799c-7.862-7.859-11.789-17.54-11.789-29.031c0-10.886,3.926-19.96,11.487-27.825 C115.217,85.28,124.59,81.35,135.482,81.35L135.482,81.35z M104.335,182.965h61.993v247.689h-61.993V182.965z" />
          </g>
        </svg>
      </StyledLinkedInContainer>
      <Toggle />
    </StyledButtonContainer>
  )
}

export default Buttons
