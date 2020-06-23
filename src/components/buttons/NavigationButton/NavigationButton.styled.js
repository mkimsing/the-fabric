import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 12px 16px 12px 16px;
  cursor: pointer;
  border-radius: 4px;
  justify-content: center;
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.25px;
  box-sizing: border-box;
  ${props => props.variant === 'fill' && css`
    background-color: #A166F5;
    color: white;
    border: none;
    `
  }

  ${props => props.variant === 'outline' && css`
    border: #A166F5 solid 1px;
    color: #A166F5;
    background-color: white;
    `
  }
`;