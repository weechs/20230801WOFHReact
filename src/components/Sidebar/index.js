import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
  ChristmasTree
} from "../Sidebar/SidebarElements";
import images from "../../images";
import { xmas, box, xmasclose, nyopen } from "../Xmas";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon
          xmas={
            new Date() >= new Date(xmas) && new Date() <= new Date(box)
              ? true
              : false
          }
        />
      </Icon>
      <SidebarWrapper>
        <SidebarBtnWrap>
          <SidebarRoute>
            <a
              href="https://qunote3.net"
              alt="Login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.qunoteLogin} alt="Login" />
            </a>
          </SidebarRoute>
          <SidebarRoute>
            <a
              href="https://www.wheelofhealth.co.uk/login"
              alt="Login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.wofhLogoWheel} alt="Associate Login" />
            </a>
          </SidebarRoute>
        </SidebarBtnWrap>
        <SidebarMenu>
          {new Date() >= new Date(xmasclose) &&
          new Date() <= new Date(nyopen) ? (
            <SidebarLink
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
            </SidebarLink>
          ) : null}
          <SidebarLink
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
          </SidebarLink>
          <SidebarLink
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
          </SidebarLink>
          <SidebarLink
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
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
