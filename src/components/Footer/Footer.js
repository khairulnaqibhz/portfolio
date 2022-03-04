import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin, AiFillBehanceSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:khairulnaqibhz@gmail.com">khairulnaqibhz@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>The things we know the best are the things we haven't been taught</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/khairulnaqibhz">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.behance.net/khairulnaqibhz">
            <AiFillBehanceSquare size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/channel/UCeoWyavgtmlAuCHqKirb08A">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
