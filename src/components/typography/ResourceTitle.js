
import styled, { css } from 'styled-components';
import DynamicComponent from './DynamicComponent';

export const ResourceTitleStyle = (size = '20', desktopSize) => css`
  font-family: Roboto;
  font-size: ${size}px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0,0,0.87);
`;

const ResourceTitle = styled(DynamicComponent)`
  ${props => ResourceTitleStyle(props.size, props.desktopSize)};
`;

export default ResourceTitle;