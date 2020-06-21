
import styled, { css } from 'styled-components';
import DynamicComponent from './DynamicComponent';

export const NavigationHeaderStyle = (size = '20', desktopSize) => css`
  font-family: Roboto;
  font-size: ${size}px;
  font-weight:900;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #A166F5;
`;

const NavigationHeader = styled(DynamicComponent)`
  ${props => NavigationHeaderStyle(props.size, props.desktopSize)};
`;

export default NavigationHeader;