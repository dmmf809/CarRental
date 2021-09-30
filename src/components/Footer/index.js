import React from 'react';
import {
  FooterContainer,
  FooterLinks,
  FooterItems,
  FooterHeading,
  Email,
  Phone,
  Icon,
  IconP,
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
          <IconP>
            Icons made by{' '}
            <Icon
              href='https://www.flaticon.com/authors/dinosoftlabs'
              title='DinosoftLabs'
            >
              DinosoftLabs{' '}
            </Icon>
            from{' '}
            <Icon href='https://www.flaticon.com/' title='Flaticon'>
              www.flaticon.com
            </Icon>
          </IconP>
        </FooterItems>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
