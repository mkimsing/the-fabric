import React, { useState } from 'react'
import { StyledDiv } from './Home.styled'
import NavigationButton from '../../components/buttons/NavigationButton'
import CTAButton from '../../components/buttons/CTAButton'
import CheckboxCard from '../../components/cards/CheckboxCard'
import Header from '../../components/Header'
import goods_icon from '../../assets/icons/goods_icon.svg'
export default function Home() {
  const [selected, setSelected] = useState({
    goods: false
  })
  return (
    <>
      <Header></Header>
      <StyledDiv>

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
