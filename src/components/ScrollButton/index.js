import React from 'react';
import { ArrowheadDownOutline } from '@styled-icons/evaicons-outline/ArrowheadDownOutline';

import { Container } from './styles';

function ScrollButton() {
  return (
    <Container to="/#about">
      <ArrowheadDownOutline  className="bounce" size={50} color={'#f8f8f2'} />
    </Container>
  );
}

export default ScrollButton;
