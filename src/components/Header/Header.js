import React, { useState } from 'react'
import { StyledHeader } from './Header.styled'
import Menu from './Menu'
import { useMediaQuery } from 'react-responsive'
import { media, breakpoints } from '../../shared/grid'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/brand/Logo_Colour_A166F5.png'
import NavigationButton from '../buttons/NavigationButton'
import routes from '../../shared/routes'

function Header({ history }) {
  const [showMenu, setshowMenu] = useState(false)
  const isTabletLandscape_Up = useMediaQuery({ query: `(min-width: 768px)` })
  return (
    <StyledHeader>
      <img src={logo} className='logo' onClick={() => { history.push('/'); }} />
      {
        isTabletLandscape_Up ?
          <nav className={'navbar'}>
            <Link activeClassName='nav-item_active' exact to="/">Submit Resource</Link>
            <Link activeClassName='nav-item_active' to="/">Contact Us</Link>
            <NavigationButton text='Search Resources' onClick={() => { history.push(routes.SEARCH_TYPE) }} />
          </nav>
          :
          <>
            <button onClick={() => { setshowMenu(true) }} className='hamburger'>
              <div className='hamburger__row' />
              <div className='hamburger__row' />
              <div className='hamburger__row' />
            </button>

            {showMenu &&
              <Menu onClickClose={() => { setshowMenu(false) }}></Menu>}
          </>
      }
    </StyledHeader >
  )
}

export default withRouter(Header)