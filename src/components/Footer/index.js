import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, Text } from './styles';

const Footer = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query Myfooter {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <Container>
      <Text>
        <a href="https://github.com/anacvignola" target="_blank">
          {author}
        </a>{' '}
        © 2020
      </Text>
    </Container>
  );
};

export default Footer;
