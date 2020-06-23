import React from 'react'
import { StyledButton } from './LinkButton.styled'
export default function LinkButton({ children, className, ...rest }) {
  return (
    <StyledButton className={`link-button ${className}`} {...rest}>
      {children}
    </StyledButton>
  )
}
