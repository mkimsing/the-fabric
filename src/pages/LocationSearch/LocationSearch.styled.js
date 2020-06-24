import styled from 'styled-components';
import { edge_gutters, media } from '../../shared/grid'
export const StyledDiv = styled.div`
  ${edge_gutters}
  h2{
    margin: 24px auto 32px auto;
    ${media.for_large_desktop_up`
      margin: 144px auto 24px auto
    `}
    text-align: center;
  }
  .search-container{
    position: relative;
    margin: auto;
    display: block;
    box-sizing: border-box;
    max-width: 366px;
    width: 100%;
    height: 56px;

    ${media.for_tablet_landscape_up`
      max-width: unset;
      width: 536px;
    `}
  }

  .searchbar{
    border: 1px solid rgba(0,0,0,0.38);
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.6);
  }
  
  .search-icon{
    position: absolute;
    right: 16px;
    top: calc(50% - 12px);
  }
    .navigation-button-container{
    position: absolute;
    bottom: 35px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 450px;
    ${media.for_tablet_landscape_up`
      max-width: unset;
      width: 536px;
      position: relative;
      bottom: 0px;
      margin-top: 48px;
    `}
    ${media.for_large_desktop_up`
        position: relative;
        bottom: 0px;
        margin-top: 48px;
    `}
    &__inner{
      ${edge_gutters}
      ${media.for_tablet_landscape_up`
        margin: 0px;
      `}
      display: flex;
      justify-content: space-between;
    }
  }

  .navigation-button{
    width: 200px;

    &__left{
      margin-right: 15px;
    }
  }
`;