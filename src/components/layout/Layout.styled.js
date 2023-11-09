import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-weight: 500;

  &.active {
    color: orangered;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
`;