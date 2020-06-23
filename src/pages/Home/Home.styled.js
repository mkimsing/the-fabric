import styled from 'styled-components';
import { edge_gutters, media } from '../../shared/grid'
export const StyledDiv = styled.div`
  ${edge_gutters}
  .hero-image{
    width: 100%;
    height: auto;
    max-width: 766px;
    margin: 0px auto 0px auto;
    display: block;
    ${media.for_large_desktop_up`
      max-width: 688px;
    `}
  }

  .button-container{
    margin: auto;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 32px 0px 32px 0px;
    ${media.for_tablet_landscape_up`
      margin-bottom: 260px;
    `}
    ${media.for_large_desktop_up`
      margin-bottom: 32px
    `}
  }

  .cta-button{
    width: 50%;
    max-width: 245px;
    &__left{
      margin-right: 16px
    }
  }

  .mission-statement{
    max-width: 536px;
    margin: auto;
    display: block;
    ${media.for_large_desktop_up`
      max-width: 636px;
    `}
  }

  h1{
    margin: 24px 0px 24px 0px;
  }

  h1, p{
    ${media.for_tablet_landscape_up`
    text-align: center;
    `}
  }

  .link-button{
    ${media.for_tablet_landscape_up`
      margin: auto;
      display: block;
      margin-top: 24px
    `}
    margin-top: 8px
  }
`;