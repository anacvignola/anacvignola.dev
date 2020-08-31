import styled from 'styled-components';

export const SocialLinkWrapper = styled.nav`
  margin: 1rem auto;
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: #8be9fd;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #50fa7b;
  }
`;

export const IconWrapper = styled.div`
  margin: 0 2rem;
  width: 60px;
  height: 60px;
`;
