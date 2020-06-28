import styled from 'styled-components';
import { edge_gutters, media } from '../../shared/grid'
export const StyledDiv = styled.div`
  ${edge_gutters}
  margin-bottom: 18px;
  h2{
    margin-top: 24px;
    margin-bottom: 40px;
  }

  .divider{
    opacity: 0.12;
    border-top: 1px solid black;
    margin: 16px 0px
  }

  .resource-logo{
    width: 166px;
    height: auto;
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

    &__needed{
      padding-bottom: 24px;
    }

    &__available{
      margin-bottom: 8px;
    }
  }

  .location{
    display: grid;
    grid-template:  24px 24px / 24px 1fr;
    align-items: center;
    row-gap: 5px;
    &__icon{
      margin-right: 5px;
    }
    &__title{
      margin: 0px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;

      letter-spacing: 1.25px;

      color: #A166F5;
    }

    p{
      grid-column: 2;
    }
  }

  .share{
    display: flex;
    align-items: center;
    &__icon{
      margin-right: 5px;
    }
    &__title{
      margin: 0px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;

      letter-spacing: 1.25px;

      color: #A166F5;
    }
  }

  .navigation-button{
    margin-bottom: 24px;
    width: 100%;
  }
`;