import React from 'react'
import { StyledButton } from './NavigationButton.styled'
export default function Button({ text = '', variant = 'fill', onClick = () => { console.log('onPress in button not set') }, ...rest }) {
  return (
    <StyledButton onClick={onClick} variant={variant} {...rest}>
      {text.toUpperCase()}
    </StyledButton>
  )
}
