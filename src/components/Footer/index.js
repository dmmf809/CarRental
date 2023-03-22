import React from "react";
import {
  FooterContainer,
  FooterLinks,
  FooterItems,
  FooterHeading,
  Email,
  Phone,
  Icon,
  IconP,
  SocialLinks,
  SocialLinksContainer,
} from "./style";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterItems>
          <FooterHeading>Contact Us</FooterHeading>
          <Email href="mailto:dodgycarrental@gmail.com">
            Email: dodgycarrental@gmail.com
          </Email>
          <Phone href="tel:403-974-4000">Phone: 403-974-4000</Phone>
          <SocialLinksContainer>
            <SocialLinks
              href="https://github.com/dmmf809/CarRental"
              rel="noopener"
            >
              <BsGithub />
            </SocialLinks>
            <SocialLinks
              href="https://www.linkedin.com/in/daenielle-felipe/"
              rel="noopener"
            >
              <BsLinkedin />
            </SocialLinks>
          </SocialLinksContainer>

          <IconP>
            Icons made by{" "}
            <Icon
              href="https://www.flaticon.com/authors/dinosoftlabs"
              title="DinosoftLabs"
            >
              DinosoftLabs{" "}
            </Icon>
            from{" "}
            <Icon href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </Icon>
          </IconP>
        </FooterItems>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
