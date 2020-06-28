import React from 'react'
import { StyledDiv } from './BackButton.styled'
import { FiChevronsLeft } from 'react-icons/fi'
import { PageHeader } from '../../typography'
export default function BackButton({ text = 'Search Again', ...rest }) {
  return (
    <StyledDiv {...rest}>
      <FiChevronsLeft size={14} color='#A166F5' className='left-chevrons' />
      <PageHeader tag='h3' size='16'>{text}</PageHeader>
    </StyledDiv>
  )
}
