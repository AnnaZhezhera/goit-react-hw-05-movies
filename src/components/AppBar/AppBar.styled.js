import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarWrapp = styled.div`
  display: grid;
  grid-template-columns: 80px 60px 1fr;
  text-align: center;

  .Link {
    text-decoration: none;
  }
`;

export const StyledLink = styled(NavLink)`
  color: grey;
  font-weight: 700;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: black;
  }

  &.active {
    background-color: orange;
    color: white;
  }
`;
