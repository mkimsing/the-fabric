import React from 'react'
import { StyledCTAButton } from './CTAButton.styled'
import { FaPlus } from 'react-icons/fa';
export default function CTAButton({ text = '' }) {
  return (
    <StyledCTAButton>
      <FaPlus color='white' size={14} style={{ marginRight: 8 }} />
      {text.toUpperCase()}
    </StyledCTAButton>
  )
}
