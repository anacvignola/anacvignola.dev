import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { WrapperImage } from './styles';

const Background = () => {
  const { ilustrationImage } = useStaticQuery(
    graphql`
      query {
        ilustrationImage: file(relativePath: { eq: "ilustration.png" }) {
          childImageSharp {
            fluid(maxWidth: 820, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  return (
    <WrapperImage
      fluid={ilustrationImage.childImageSharp.fluid}
      className="Background"
      objectFit="cover"
    />
  );
};

export default Background;
