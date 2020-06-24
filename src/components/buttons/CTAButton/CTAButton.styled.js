import styled from 'styled-components';
import { media } from '../../../shared/grid'
export const StyledCTAButton = styled.button`
  border: none;
  padding: 24px 48px 24px 48px;
  background-color: rgba(98, 0, 238, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: left;
  position: relative;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 1.25px;
  font-weight: medium;

  cursor: pointer;
  ${media.for_tablet_landscape_up`
      font-size: 16px;
  `}

  .plus-icon{
    position: absolute;
    left: 8px;
    height: 24px;
    width: 24px;
  }
`;