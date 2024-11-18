import React from 'react'
import styled from 'styled-components'

const CtaContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 100%;
  padding: 20px 60px;
  //height: 50px;
  background-color: #0a66c2; /* LinkedIn blue color */
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }
`

export const LinkedInCta: React.FC = () => {
  return (
    <CtaContainer
      href="https://www.linkedin.com/in/robustacode/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Contact me on LinkedIn
    </CtaContainer>
  )
}
