import React, { useState } from 'react'
import { StyledDiv } from './Home.styled'
import NavigationButton from '../../components/buttons/NavigationButton'
import CTAButton from '../../components/buttons/CTAButton'
import CheckboxCard from '../../components/cards/CheckboxCard'
import Header from '../../components/Header'
import goods_icon from '../../assets/icons/goods_icon.svg'
import multicultural_communities from '../../assets/images/MulticulturalCommunities.png'
import { LandingHeader } from '../../components/typography'
export default function Home() {
  const [selected, setSelected] = useState({
    goods: false
  })
  return (
    <>
      <Header></Header>
      <StyledDiv>
        <img src={multicultural_communities} className={'hero-image'}></img>
        <LandingHeader tag='h1'>FIND COVID-19 SUPPORT EFFORTS</LandingHeader>
        <NavigationButton text={'Im a fill navigation button'} onClick={() => { console.log('Pressed the button') }} style={{ marginBottom: '5px' }} />
        <NavigationButton text={'Im an outline navigation button'} onClick={() => { console.log('Pressed the button') }} variant='outline' />

        <CTAButton text='Im a CTA Button' />

        <CheckboxCard
          icon_src={goods_icon}
          title={'Goods'}
          active={selected.goods}
          onClick={() => {
            setSelected(prevState => {
              return {
                ...prevState,
                goods: !prevState.goods
              }
            })
          }}
        />

      </StyledDiv>
    </>
  )
}
