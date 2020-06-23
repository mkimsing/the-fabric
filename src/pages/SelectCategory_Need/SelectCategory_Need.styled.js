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

  .grid-container{
    margin: auto;
    max-width: 368px;
    ${media.for_tablet_landscape_up`
      max-width: 512px;
    `}
    display: grid;
    grid-template: 50% 50% / 1fr 1fr;
    justify-items: center;
    align-items: center;
    row-gap: 16px;
    column-gap: 16px;
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
      width: 512px;
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