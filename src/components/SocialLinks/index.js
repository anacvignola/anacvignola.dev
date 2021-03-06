import React from 'react';

import Icons from './icons';
import links from './content';

import {
  SocialLinkWrapper,
  SocialLinksList,
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper,
} from './styles';

const SocialLinks = () => (
  <SocialLinkWrapper>
    <SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label];

        return (
          <SocialLinksItem key={i}>
            <SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </SocialLinksLink>
          </SocialLinksItem>
        );
      })}
    </SocialLinksList>
  </SocialLinkWrapper>
);

export default SocialLinks;
