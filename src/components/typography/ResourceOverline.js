
import styled, { css } from 'styled-components';
import DynamicComponent from './DynamicComponent';

export const ResourceOverlineStyle = (size = '10', desktopSize) => css`
  font-family: Roboto;
  font-size: ${size}px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: rgba(0,0,0.87);
  margin: 0px;
  text-transform: uppercase
`;

const ResourceOverline = styled(DynamicComponent)`
  ${props => ResourceOverlineStyle(props.size, props.desktopSize)};
`;

export default ResourceOverline;