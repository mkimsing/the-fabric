import React, { useState } from 'react'
import { Home_StyledDiv } from './Home.styled'
import NavigationButton from '../../components/buttons/NavigationButton'
import CTAButton from '../../components/buttons/CTAButton'
import CheckboxCard from '../../components/cards/CheckboxCard'
import goods_icon from '../../assets/icons/goods_icon.svg'
export default function Home() {
  const [selected, setSelected] = useState({
    goods: false
  })
  return (
    <Home_StyledDiv>
      <h3>Heres some text</h3>
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
    </Home_StyledDiv>
  )
}
