import React from 'react'
import { StyledDiv } from './SearchType.styled'
import CTAButton from '../../components/buttons/CTAButton'
import { PageHeader } from '../../components/typography'
export default function SearchType() {
  return (
    <StyledDiv>
      <PageHeader tag='h2'>What are you looking for today?</PageHeader>
      <div className='button-container'>
        <CTAButton text='I want to help' className={'cta-button cta-button__left'} />
        <CTAButton text='I need support' className={'cta-button'} />
      </div>
    </StyledDiv>
  )
}
