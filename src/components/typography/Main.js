import styled, { css } from 'styled-components';
import DynamicComponent from './DynamicComponent';

export const MainStyle = (size = '20', desktopSize) => css`
  font-family: Roboto;
  font-size: ${size}px;
  font-weight: 400;
  line-height: 24px;
  color: #202020;
`;

const Main = styled(DynamicComponent)`
  ${props => MainStyle(props.size, props.desktopSize)};
`;

export default Main;