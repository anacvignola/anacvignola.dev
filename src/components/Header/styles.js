import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuLinksWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Link)`
  color: #bd93f9;
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #bd93f9;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const MenuLinksList = styled.ul`
  display: flex;
  font-size: 1.1rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  margin: 0 1rem;
  .active {
    color: #50fa7b;
  }
`;

export const MenuLinksLink = styled(Link)`
  color: #8be9fd;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #50fa7b;
  }
`;
