import styled from 'styled-components';

export const StyledNav = styled.nav`
 .menu{
  top: 0px;
  right: 0px;
  z-index: 2;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: white;
  padding: 32px;
  width: 85vw;
  height: 100vh;
  box-sizing: border-box;
  a {
    font-size: 24px;
    padding: 16px 0;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    width: auto;
    &:hover {
      color: red;
    }
  }

  .close-icon{
    margin-left: auto;
  }

  .search-resources-button{
   max-width: 300px;
   width: 80%;
  }
 }

  .dark-overlay{
    left: 0px;
    top: 0px;
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
  }
`;