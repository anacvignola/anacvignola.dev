import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const WrapperImage = styled(Img)`
  max-width: 600px;
  width: 100%;
  display: flex;

  ${media.lessThan("large")`
    max-width: 400px
    width: 100%;
  `}

  ${media.lessThan("medium")`
    display: none;
  `}
`;
