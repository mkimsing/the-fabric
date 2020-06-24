import React from 'react'
import { StyledDiv } from './SearchType.styled'
import CTAButton from '../../components/buttons/CTAButton'
import { PageHeader } from '../../components/typography'
import routes from '../../shared/routes'
export default function SearchType({ history }) {
  return (
    <StyledDiv>
      <PageHeader tag='h2'>What are you looking for today?</PageHeader>
      <div className='button-container'>
        <CTAButton text='I want to help' className={'cta-button cta-button__left'} onClick={() => { history.push(routes.CATEGORY_SELECT, { variant: 'offer', }) }} />
        <CTAButton text='I need support' className={'cta-button'} onClick={() => { history.push(routes.CATEGORY_SELECT, { variant: 'need', }) }} />
      </div>
    </StyledDiv>
  )
}