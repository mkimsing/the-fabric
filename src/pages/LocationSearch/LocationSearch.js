import React, { useState } from 'react'
import { StyledDiv } from './LocationSearch.styled'
import { PageHeader } from '../../components/typography'
import { MdSearch } from 'react-icons/md';
import routes from '../../shared/routes';
import NavigationButton from '../../components/buttons/NavigationButton'
export default function LocationSearch({ location, history }) {
  let { variant, categories } = location.state
  const [search, setSearch] = useState('')
  let title = variant === 'need' ? 'Where do you need support?' : 'Where do you want to help?'
  return (
    <StyledDiv>
      <PageHeader tag='h2'>{title}</PageHeader>
      <div className='search-container'>

        <input type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} className='searchbar' placeholder='Province/State or City' />
        <MdSearch color='black' size={24} className='search-icon' />
      </div>
      <div className='navigation-button-container'>
        <div className='navigation-button-container__inner'>
          <NavigationButton text={'Previous Step'} variant='outline' className='navigation-button navigation-button__left'
            onClick={() => { history.push(routes.CATEGORY_SELECT, { initialSelected: categories, variant: variant }) }} />
          <NavigationButton text={'Confirm Location'} className='navigation-button' onClick={() => { history.push(routes.SEARCH_RESULTS, { variant: variant, categories: categories, searchLocation: search }) }} />
        </div>
      </div>
    </StyledDiv>
  )
}
