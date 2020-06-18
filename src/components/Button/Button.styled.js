import styled, { css } from 'styled-components';

export const StyledDiv = styled.div`
  padding: 12px 16px 12px 16px;

  border-radius: 4px;
  justify-content: center;
  display: flex;

  ${props => props.variant === 'fill' && css`
    background-color: #A166F5;
    color: white;
    `
  }

  ${props => props.variant === 'outline' && css`
    border: #A166F5 solid 1px;
    color: #A166F5;
    `
  }
`;