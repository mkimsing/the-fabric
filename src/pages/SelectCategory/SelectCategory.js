import React, { useState } from 'react'
import { StyledDiv } from './SelectCategory.styled'
import { PageHeader } from '../../components/typography'
import CheckboxCard from '../../components/cards/CheckboxCard'
import NavigationButton from '../../components/buttons/NavigationButton'
import goods_icon from '../../assets/icons/goods_assistance_icon.svg'
import services_icon from '../../assets/icons/services_assistance_icon.svg'
import financial_icon from '../../assets/icons/financial_assistance_icon.svg'
import medical_icon from '../../assets/icons/medical_assistance_icon.svg'
import routes from '../../shared/routes'
export default function SelectCategory({ history, location }) {
  let { variant, initialSelected } = location.state

  const [selected, setSelected] = useState({
    goods: false,
    services: false,
    financial: false,
    medical: false,
    ...initialSelected
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
      title: 'Medical Supplies and Equipment',
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

  let title = variant === 'need' ? 'With what do you need support?' : 'How do you want to help?'
  return (
    <StyledDiv>
      <PageHeader tag='h2'>{title}</PageHeader>
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
          <NavigationButton text={'Previous Step'} variant='outline' className='navigation-button navigation-button__left'
            onClick={() => { history.push(routes.SEARCH_TYPE) }} />
          <NavigationButton text={'Confirm Selection'} className='navigation-button'
            onClick={() => { history.push(routes.LOCATION_SEARCH, { categories: selected, variant: variant }) }} />
        </div>
      </div>
    </StyledDiv>
  )
}
