import React, { useState } from 'react'
import { StyledDiv } from './Home.styled'
import CTAButton from '../../components/buttons/CTAButton'
import multicultural_communities from '../../assets/images/MulticulturalCommunities.png'
import { LandingHeader, Main } from '../../components/typography'
import LinkButton from '../../components/buttons/LinkButton'
import routes from '../../shared/routes'
export default function Home({ history }) {
  return (
    <>
      <StyledDiv>
        <img src={multicultural_communities} className={'hero-image'}></img>
        <LandingHeader tag='h1'>FIND COVID-19 SUPPORT EFFORTS</LandingHeader>

        <Main tag='p' className='mission-statement'>We help make connections between support efforts and individuals impacted by COVID-19</Main>
        <div className='button-container'>
          <CTAButton text='I want to help' className={'cta-button cta-button__left'} onClick={() => { history.push(routes.CATEGORY_SELECT, { variant: 'offer' }) }} />
          <CTAButton text='I need support' className={'cta-button'} onClick={() => { history.push(routes.CATEGORY_SELECT, { variant: 'need', }) }} />
        </div>
        <Main tag='p'>Have a resource you want to share with others affected by COVID-19?</Main>
        <LinkButton>Share a resource with us</LinkButton>

      </StyledDiv>
    </>
  )
}