import styled from 'styled-components';
import { edge_gutters, media } from '../../../shared/grid'
export const StyledDiv = styled.div`

  border: 1px solid #E5E5E5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  max-width: 688px;
  margin: auto;
  .resource-logo{
    padding: 16px 24px 16px 24px;
    width: 166px;
    height: auto;
  }

  .main{
      padding: 16px 24px 0px 24px;
      background: #F1F1F1;
    .inner{
      ${media.for_tablet_landscape_up`
        width: 80%;
      `}
      ${media.for_large_desktop_up`
        width: 100%;
      `}
    }
    h4{
      padding-top: 24px;
      margin-bottom: 8px;
    }
    p{
      margin-top: 16px;
      margin-bottom: 24px;
    }

    .support-title{
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;

      letter-spacing: 1.8px;
      text-transform: uppercase;

      display: flex;
      align-items: center;

      &__needed{
        color: #CF6679;
      }

      &__available{
        color: #00B3A6;
      }

      &__icon{
        margin-right: 5px;
      }
    }

    .chip-container{
      display: flex;
      flex-wrap: wrap;
      
      margin-top: 8px;
      padding-bottom: 24px;
    }
  }
`;