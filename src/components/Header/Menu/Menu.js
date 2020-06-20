import React from 'react';
import { StyledNav } from './Menu.styled';
import NavigationButton from '../../buttons/NavigationButton'
import { MdClose } from 'react-icons/md'
export default function Menu({ onClickClose }) {
  return (
    <StyledNav>
      <div className='menu'>
        <div onClick={onClickClose} className='close-icon'>
          <MdClose size={40}></MdClose>
        </div>
        <a href="/">
          Home
          </a>
        <a href="/">
          Submit Resource
          </a>
        <a href="/">
          About
          </a>
        <a href="/">
          Resources
          </a>

        <NavigationButton text='Search Resources' className={'search-resources-button'} />
      </div>


      <div className='dark-overlay'>
      </div>
    </StyledNav>
  )
}