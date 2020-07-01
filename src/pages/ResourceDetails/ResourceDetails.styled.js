import styled from 'styled-components';
import { edge_gutters, media } from '../../shared/grid'
import Modal from 'styled-react-modal'
export const StyledDiv = styled.div`
  ${edge_gutters}
  margin-bottom: 18px;
  ${media.for_large_desktop_up`
    max-width: 864px;

    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  `}
  ${media.for_tablet_landscape_up`
    .flex-container{
      display: flex;
    }
  
    .back-button{
      margin-top: 43px;
      margin-bottom: 33px;
    }

    .col-left{
      width: 35%;
      margin-right: 24px;
    }
    .col-right{
      width: 65%;
    }

    p{
      margin-bottom: 16px;
    }
  `}

  h2{
    margin-top: 24px;
    margin-bottom: 40px;
    ${media.for_tablet_landscape_up`
      margin-top: 0px;
      margin-bottom: 16px;
    `}
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

    ${media.for_tablet_landscape_up`
      width: 100%;
    `}
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

    &__title-container{
      display: flex;
      align-items: center;
    }

    ${media.for_tablet_landscape_up`
      .share__icon-container{
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .facebook-icon{
        margin: 0px 32px;
      }

      .linkedin-icon{
        margin-right: 32px;
      }
    `}
  }

  .navigation-button{
    margin-bottom: 24px;
    width: 100%;
  }
`;

export const StyledModal = Modal.styled`
  width: 366px;
  background: white;
  position: relative;
  padding: 32px;
  box-sizing: border-box;
  .modal__close{
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .modal__title{
    text-align: center;
  }

  .modal__icon-container{
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .facebook-icon{
    margin: 0px 32px;
  }

  .linkedin-icon{
    margin-right: 32px;
  }
`;