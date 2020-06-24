import styled from 'styled-components';
import { edge_gutters, media } from '../../shared/grid'
export const StyledDiv = styled.div`
  ${ edge_gutters}
  h2{
    margin: 24px auto 32px auto;
    ${media.for_large_desktop_up`
      margin: 144px auto 24px auto
    `}
    text-align: center;
  }
  .button-container{
    margin: auto;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .cta-button{
    width: 50%;
    max-width: 245px;
    &__left{
      margin-right: 16px
    }
  }
`;