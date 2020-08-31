import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import links from './content';

import {
  MenuLinksWrapper,
  Title,
  MenuLinksList,
  MenuLinksItem,
  MenuLinksLink,
} from './styles';

const Header = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query MysiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <MenuLinksWrapper>
      <Title to="/">{title}</Title>
      <MenuLinksList>
        {links.map((link, i) => (
          <MenuLinksItem key={i}>
            <MenuLinksLink to={link.url} activeClassName="active">
              {link.label}
            </MenuLinksLink>
          </MenuLinksItem>
        ))}
      </MenuLinksList>
    </MenuLinksWrapper>
  );
};

export default Header;
