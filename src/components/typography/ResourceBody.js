
import styled, { css } from 'styled-components';
import DynamicComponent from './DynamicComponent';

export const ResourceBodyStyle = (size = '16', desktopSize) => css`
  font-family: Roboto;
  font-size: ${size}px;
  font-weight: 400;
  line-height: 24px;
  margin: 0px;
  letter-spacing: 0.5px;
  color: rgba(18, 18, 18, 0.87);
`;

const ResourceBody = styled(DynamicComponent)`
  ${props => ResourceBodyStyle(props.size, props.desktopSize)};
`;

export default ResourceBody;