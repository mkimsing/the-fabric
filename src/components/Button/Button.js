import React from 'react'
import { StyledDiv } from './Button.styled'
export default function Button({ text = '', variant = 'fill', onPress = () => { console.log('onPress in button not set') }, ...rest }) {
  return (
    <StyledDiv onPress={onPress} variant={variant} {...rest}>
      {text.toUpperCase()}
    </StyledDiv>
  )
}
