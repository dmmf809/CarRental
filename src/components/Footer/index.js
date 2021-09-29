import React from 'react';
import {
  FooterContainer,
  FooterLinks,
  FooterItems,
  FooterHeading,
  Email,
  Phone,
} from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterItems>
          <FooterHeading>Contact Us</FooterHeading>
          <Email href='mailto:dodgycarrental@gmail.com'>
            Email: dodgycarrental@gmail.com
          </Email>
          <Phone href='tel:403-974-4000'>Phone: 403-974-4000</Phone>
        </FooterItems>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
