import React from 'react';

import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import gsap from 'gsap';

import Burger from './Burger';

const handleMouseEnter = (e) => {
  const letterList = [...e.target.childNodes[0].childNodes];
  const tl = gsap.timeline();
  tl.to(letterList, {
    y: -10,
    stagger: 0.1,
  });
  tl.to(
    letterList,
    {
      y: 0,
      stagger: 0.1,
    },
    0.2
  );
};

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  padding: 7% 0;
  transform: translateY(${(props) => (props.isMenuActive ? '0' : '-100%')});
  background-color: var(--color-background-dark);
  z-index: 2;
  transition: 0.3s;
`;

const NavigationLink = styled(NavLink)`
  margin: 0 auto;
  position: relative;
  display: block;
  height: 25%;
  width: 90%;
  max-width: 650px;
  text-decoration: none;
  font-size: 1.6rem;
  background-color: var(--color-background);
  color: var(--color-font-dark);

  &.selected {
    color: var(--color-font);
    pointer-events: none;
  }
`;

const NavigationName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LetterSpan = styled.span`
  display: inline-block;
`;

const Header = ({
  pages,
  isMenuActive,
  isTransitionActive,
  handleMenuActivator,
}) => {
  const menuPages = pages.filter((page) => page.order < 10);
  return (
    <Wrapper>
      <Burger
        isMenuActive={isMenuActive}
        isTransitionActive={isTransitionActive}
        handleMenuActivator={handleMenuActivator}
      />
      <Navigation isMenuActive={isMenuActive}>
        {menuPages.map((page) => (
          <NavigationLink
            key={page.order}
            to={page.path}
            onMouseEnter={handleMouseEnter}
            onClick={handleMenuActivator}
            exact
            activeClassName='selected'
          >
            <NavigationName>
              {[...page.name].map((letter, index) => (
                <LetterSpan key={index}>{letter}</LetterSpan>
              ))}
            </NavigationName>
          </NavigationLink>
        ))}
      </Navigation>
    </Wrapper>
  );
};

export default Header;
