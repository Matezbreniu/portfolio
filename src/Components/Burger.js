import React from 'react';

import styled from 'styled-components';

const BurgerBtn = styled.div`
  position: fixed;
  top: 10%;
  right: 10%;
  width: 30px;
  height: 30px;
  padding: 5px;
  z-index: 3;
  cursor: pointer;
  opacity: ${(props) => (props.isTransitionActive ? 0 : 1)};
  transition:0.3s;

  &:hover {
    span {
      width: 100%;
      background-color: var(--color-font);
    }
  }
}`;

const BurgerSpan = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  height: 2px;
  background-color: var(--color-font-dark);
  pointer-events: none;
  transition: 0.2s;

  &:nth-of-type(1) {
    width: 100%;
    transform: ${(props) =>
      props.isMenuActive
        ? 'translateY(-50%) rotate(-135deg)'
        : 'translateY(calc(-50% - 10px))'};
  }
  &:nth-of-type(2) {
    width: ${(props) => (props.isMenuActive ? '100%' : '75%')};
    transform: ${(props) =>
      props.isMenuActive
        ? 'translateY(-50%) translateX(200%)'
        : 'translateY(-50%)'};
    opacity: ${(props) => (props.isMenuActive ? 0 : 1)};
  }
  &:nth-of-type(3) {
    width: ${(props) => (props.isMenuActive ? '100%' : '50%')};
    transform: ${(props) =>
      props.isMenuActive
        ? 'translateY(-50%) rotate(135deg)'
        : 'translateY(calc(-50% + 10px))'};
  }
`;

const Burger = (props) => {
  return (
    <BurgerBtn
      isTransitionActive={props.isTransitionActive}
      isMenuActive={props.isMenuActive}
      onClick={props.menuActivator}
    >
      <BurgerSpan isMenuActive={props.isMenuActive}></BurgerSpan>
      <BurgerSpan isMenuActive={props.isMenuActive}></BurgerSpan>
      <BurgerSpan isMenuActive={props.isMenuActive}></BurgerSpan>
    </BurgerBtn>
  );
};

export default Burger;
