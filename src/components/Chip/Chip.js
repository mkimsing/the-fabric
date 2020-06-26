import React from 'react'
import { StyledDiv } from './Chip.styled.js'
export default function Chip({ children, ...rest }) {
  return (
    <StyledDiv {...rest}>
      {children}
    </StyledDiv>
  )
}
