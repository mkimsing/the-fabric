import React from 'react'
import { StyledDiv } from './ResourceCard.styled'
import blanked_pug from '../../../assets/images/blanket_pug.jpg'
import { MdError, MdCheckCircle } from 'react-icons/md'
import { ResourceTitle, ResourceOverline, Main, ResourceBody } from '../../typography'
import Chip from '../../Chip'
export default function ResourceCard() {
  let chips_needed = [
    'Grocery Delivery',
    'Emotional Support',
    'Educational Resources',
    'Financial Assistance',
    'Resource Directory'
  ]
  let chips_available = [
    'Grocery Delivery',
    'Emotional Support',
    'Educational Resources',
    'Financial Assistance',
    'Resource Directory'
  ]
  return (
    <StyledDiv>
      <img src={blanked_pug} className='resource-logo'></img>
      <div className='main'>
        <div className='inner'>
          <ResourceOverline tag='h4'>Vancouver, BC</ResourceOverline>
          <ResourceTitle tag='h2'>Coming Together Vancouver</ResourceTitle>
          <ResourceBody tag='p'>Connecting neighbours looking for help to those giving help during the COVID-19 pandemic</ResourceBody>

          <div className='support-title support-title__needed'>
            <MdError color='black' size={15} className='support-title__icon' />
          Help Needed
        </div>
          <div className='chip-container'>
            {
              chips_needed.map(chip => {
                return <Chip>{chip}</Chip>
              })
            }
          </div>
          <div className='support-title support-title__available'>
            <MdCheckCircle color='black' size={15} className='support-title__icon' />
          Help Available
        </div>
          <div className='chip-container'>
            {
              chips_available.map(chip => {
                return <Chip>{chip}</Chip>
              })
            }
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}
