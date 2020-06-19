import React from 'react'
import { StyledDiv } from './CheckboxCard.styled'
import { FaCheck } from 'react-icons/fa'
export default function CheckboxCard({ active = false, icon_src, title = '', onClick = () => { } }) {
  return (
    <StyledDiv active={active} onClick={() => { onClick(title) }}>
      <div className='checkbox'>
        {
          active &&
          <FaCheck size={11} color={'white'} />
        }
      </div>
      <img src={icon_src}
        className='icon'
      />
      {title}
    </StyledDiv>
  )
}
