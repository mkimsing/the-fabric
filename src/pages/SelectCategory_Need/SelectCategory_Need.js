import React, { useState } from 'react'
import { StyledDiv } from './SelectCategory_Need.styled'
import { PageHeader } from '../../components/typography'
import CheckboxCard from '../../components/cards/CheckboxCard'
import NavigationButton from '../../components/buttons/NavigationButton'
import goods_icon from '../../assets/icons/goods_assistance_icon.svg'
import services_icon from '../../assets/icons/services_assistance_icon.svg'
import financial_icon from '../../assets/icons/financial_assistance_icon.svg'
import medical_icon from '../../assets/icons/medical_assistance_icon.svg'
export default function SelectCategory_Need() {
  const [selected, setSelected] = useState({
    goods: false,
    services: false,
    financial: false,
    medical: false
  })

  const cards = [
    {
      title: 'Services',
      icon: services_icon,
      category: 'services'
    },
    {
      title: 'Financial Assistance',
      icon: financial_icon,
      category: 'financial'
    },
    {
      title: 'Medical Supplies and Equiptment',
      icon: medical_icon,
      category: 'medical'
    },
    {
      title: 'Goods',
      icon: goods_icon,
      category: 'goods'
    },
  ]

  function onClickCard(category) {
    setSelected(prevState => {
      return {
        ...prevState,
        [category]: !prevState[category]
      }
    })
  }
  return (
    <StyledDiv>
      <PageHeader tag='h2'>With what do you need support?</PageHeader>
      <div className='grid-container'>
        {
          cards.map(card => {
            return (
              <CheckboxCard
                icon_src={card.icon}
                title={card.title}
                active={selected[card.category]}
                onClick={() => { onClickCard(card.category) }}
              />
            )
          })
        }
      </div>
      <div className='navigation-button-container'>
        <div className='navigation-button-container__inner'>

          <NavigationButton text={'Previous Step'} variant='outline' className='navigation-button navigation-button__left' />
          <NavigationButton text={'Confirm Selection'} className='navigation-button' />
        </div>
      </div>
    </StyledDiv>
  )
}
