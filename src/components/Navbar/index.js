import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import images from "../../images";
import { xmas, box, xmasclose, nyopen, ChristmasTree } from "../Xmas";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // const openInNewTab = (url) => {
  //   // 👇️ setting target to _blank with window.open
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  return (
    <>
      <Nav
        scrollNav={scrollNav}
        className={
          scrollNav &&
          new Date() >= new Date(xmas) &&
          scrollNav &&
          new Date() <= new Date(box)
            ? "lightStickyXmas"
            : scrollNav
            ? "lightSticky"
            : null
        }
      >
        <NavbarContainer>
          <NavLogo
            to="/"
            onClick={toggleHome}
            spy="true"
            smooth="true"
            offset={-70}
            duration={400}
          >
            <img src={images.wofhLogo} alt="Wheel of Health Logo" />
          </NavLogo>
          <MobileIcon
            onClick={toggle}
            xmas={
              new Date() >= new Date(xmas) && new Date() <= new Date(box)
                ? true
                : false
            }
          >
            <FaBars />
          </MobileIcon>

          <NavMenu>
            {new Date() >= new Date(xmasclose) &&
            new Date() <= new Date(nyopen) ? (
              <NavItem>
                <NavLinks
                  style={{}}
                  to="/enquire"
                  onClick={toggleHome}
                  spy="true"
                  smooth="true"
                  offset={-70}
                  duration={400}
                  xmas={true}
                >
                  <ChristmasTree xmas={true} />
                  Festive Opening
                </NavLinks>
              </NavItem>
            ) : null}
            <NavItem>
              <NavLinks
                style={{}}
                to="/discover"
                onClick={toggleHome}
                spy="true"
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/partnership"
                onClick={toggleHome}
                spy="true"
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Partnership
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/enquire"
                onClick={toggleHome}
                spy="true"
                smooth="true"
                offset={-70}
                duration={400}
                xmas={
                  new Date() >= new Date(xmas) && new Date() <= new Date(box)
                    ? true
                    : false
                }
              >
                Enquiry
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink
              xmas={
                new Date() >= new Date(xmas) && new Date() <= new Date(box)
                  ? true
                  : false
              }
            >
              <a
                href="https://qunote3.net"
                alt="Login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={images.qunoteLogin} alt="CaseNote Login" />
              </a>
            </NavBtnLink>
            <NavBtnLink
              xmas={
                new Date() >= new Date(xmas) && new Date() <= new Date(box)
                  ? true
                  : false
              }
            >
              <a
                href="https://www.wheelofhealth.co.uk/login"
                alt="Login"
                target="_blank"
                rel="noopener noreferrer"
                xmas={true}
              >
                <img src={images.wofhLogoWheel} alt="Associate Login" />
              </a>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
