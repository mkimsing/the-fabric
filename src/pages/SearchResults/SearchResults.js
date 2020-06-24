import React from 'react'
import { StyledDiv } from './SearchResults.styled'
import { PageHeader } from '../../components/typography'
import BackButton from '../../components/buttons/BackButton'
export default function SearchResults({ location }) {
  let searchLocation = location.state && location.state.searchLocation ? location.state.searchLocation : 'Vancouver, BC'
  let categories = location.state && location.state.categories ? location.state.categories : ['Goods', 'Financial Assistance']
  //Transform categories into readable string
  const categoryNames = {
    goods: 'Goods',
    services: 'Services',
    financial: 'Financial Assistance',
    medical: 'Medical Supplies and Equipment',
  }
  let categoriesArr = Object.keys(categories)
    .filter(key => {
      return categories[key] === true
    })
    .map(category => {
      return categoryNames[category]
    })
  return (
    <StyledDiv>
      <BackButton />
      <PageHeader tag='h2' className='search-params' size={'12'}>{`${searchLocation} / ${categoriesArr.join('; ')}`}</PageHeader>
      <div className='results'>
        <PageHeader tag='h2' className='results-number'>{`2`}</PageHeader>
        <PageHeader tag='h2'>{`results found`}</PageHeader>
      </div>

    </StyledDiv>
  )
}
