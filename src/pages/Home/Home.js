import React from 'react'
import { Home_StyledDiv } from './Home.styled'
import Button from '../../components/Button'

export default function Home() {
  return (
    <Home_StyledDiv>
      <h3>Heres some text</h3>
      <Button text={'Im a fill button'} onPress={() => { console.log('Pressed the button') }} style={{ marginBottom: '5px' }} />
      <Button text={'Im an outline button'} onPress={() => { console.log('Pressed the button') }} variant='outline' />
    </Home_StyledDiv>
  )
}
