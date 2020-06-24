import styled from 'styled-components';
import { edge_gutters, media } from '../../shared/grid'
export const StyledDiv = styled.div`
  ${edge_gutters}
  .search-params{
    margin: 24px auto 8px auto;
    ${media.for_tablet_landscape_up`
      margin: 48px auto 40px auto;
    `}
    ${media.for_large_desktop_up`
      margin: 48px auto 24px auto
    `}
    text-align: center;
  }

  .results{
    display: flex;
    margin: auto;
    justify-content: center;
    margin-bottom: 24px;
    &-number{
      font-weight: bold;
      margin-right: 5px;
    }
  }
`;