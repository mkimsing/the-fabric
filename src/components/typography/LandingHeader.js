
import styled, { css } from 'styled-components';
import DynamicComponent from './DynamicComponent';

export const LandingHeaderStyle = (size = '30', desktopSize) => css`
  font-family: Roboto;
  font-size: ${size}px;
  font-weight:900;
  line-height: 36px;
  letter-spacing: 3.9px;
  text-transform: uppercase;
  color: rgba(0,0,0.87);
`;

const LandingHeader = styled(DynamicComponent)`
  ${props => LandingHeaderStyle(props.size, props.desktopSize)};
`;

export default LandingHeader;