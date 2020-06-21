import React from 'react'
import { StyledCTAButton } from './CTAButton.styled'
import { BsPlus } from 'react-icons/bs';
export default function CTAButton({ text = '', ...rest }) {
  return (
    <StyledCTAButton {...rest}>
      <BsPlus color='white' className='plus-icon' />
      {text}
    </StyledCTAButton>
  )
}
