import styled, { css } from 'styled-components';
import { media } from '../../../shared/grid';

export const StyledDiv = styled.div`
  border: 1px solid #D8DDE6;
  border-radius: 4px;
  padding: 16px;
  position: relative;
  max-width: 175px;
  width: 100%;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  ${media.for_tablet_landscape_up`
    max-width: 260px;
    height: 228px;
  `}

  ${props => props.active && css`
    background: rgba(187, 134, 252, 0.12);
    border: 1px solid #BB86FC;
    `
  }
  .icon{
    width: auto;
    max-width: 77px;
    max-height: 60px;
    margin-bottom: 8px;
    ${media.for_tablet_landscape_up`
      margin-bottom: 26px;
      width: 110px;
      height: 110px;
      max-width: unset;
      max-height: unset;
    `}
    ${media.for_tablet_landscape_up`
      margin-bottom: 26px;

    `}
  }

  .checkbox{
    position: absolute;
    top: 16px;
    left: 16px;
    color: red;
    height: 16px;
    width: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    background: linear-gradient(0deg, #F6F7F9 0%, #FFFFFF 100%);
    border: 1px solid #D8DCE6;
    box-shadow: 0px 1px 1px rgba(22, 29, 37, 0.05), inset 0px 2px 0px rgba(255, 255, 255, 0.05);
  ${props => props.active && css`
    background: #FF9500;
    border: 1px solid #F6852F;
    box-shadow: 0px 1px 1px rgba(19, 31, 21, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.06);
    `
  }
  }
`;