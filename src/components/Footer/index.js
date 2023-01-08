import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements";
import { xmas, box } from "../Xmas";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                COMPANY
              </FooterLinkTitle>
              <FooterLink
                to="/discover"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                About Us
              </FooterLink>
              <FooterLink
                to="/professionals"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Professionals
              </FooterLink>
              <FooterLink
                to="/partnership"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Partnerships
              </FooterLink>
              {/* <FooterLink
                to="/careers"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
              >
                Careers
              </FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                RESOURCES
              </FooterLinkTitle>
              <FooterLink
                to="/support"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Client Support
              </FooterLink>
              <FooterLink
                to="/support#consent"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Your Consent
              </FooterLink>
              <FooterLink
                to="/support"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Your Privacy
              </FooterLink>
              <FooterLink
                to="/support"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Data Retention
              </FooterLink>
              <FooterLink
                to="/support"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Subject Access
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Professionals
              </FooterLinkTitle>
              <FooterLink
                to="/professionals"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Our Assessment
              </FooterLink>
              <FooterLink
                to="/medicoLegal"
                onClick={toggleHome}
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Medico-Legal
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                href="//www.linkedin.com/in/wofh2015/"
                target="_blank"
                aria-label="Twitter"
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/woh_ltd"
                target="_blank"
                aria-label="Linkedin"
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <WebsiteRights
          xmas={
            new Date() >= new Date(xmas) && new Date() <= new Date(box)
              ? true
              : false
          }
        >
          Copyright © Wheel Of Health Limited {new Date().getFullYear()}. Wheel
          of Health is the trading name of Wheel of Health Limited, registered
          in England and Wales under Company number{" "}
          <a
            href="https://beta.companieshouse.gov.uk/company/07096085"
            target="_blank"
            rel="noreferrer"
          >
            7096085.
          </a>
          . All Rights Reserved.
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
