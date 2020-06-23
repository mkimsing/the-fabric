import styled from 'styled-components';
import { media } from '../../shared/grid';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 24px;
  margin-right: 24px;
  padding: 13px 0px;

  ${media.for_large_desktop_up`
    margin-left: 200px;
    margin-right: 200px;
  `}
  .logo{
    width: 250px;
    height: auto;
  }

  .hamburger{
    position: absolute;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    
    &:focus {
      outline: none;
    }

    &__row{
      width: 2rem;
      height: 0.25rem;
      background: black;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    }
  }

  .navbar{
    max-width: 430px;
    ${media.for_desktop_up`
      max-width: 500px;
    `}
    width: 80%;
    justify-content: space-between;
    align-items: baseline;
    display: flex;
    a{
      text-decoration: none;
      color: black;
    }
    .nav-item_active{
      padding-bottom: 12px;
      border-bottom: 2px solid;
      border-bottom-color: ${props => props.colored ? 'black' : 'white'};
    }
  }
`;