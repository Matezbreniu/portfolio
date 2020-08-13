import React from 'react';

import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Btn = styled(Link)`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.direction === 'next' ? 0 : null)};
  left: ${(props) => (props.direction === 'previous' ? 0 : null)};
  transform: translateY(-50%);
  height: 50%;
  width: 200px;
  display: none;

  &:hover {
    .arrow:before {
      transform: rotate(35deg);
    }
    .arrow:after {
      transform: rotate(-35deg);
    }

    .arrowTip {
      transform: translateX(
          ${(props) =>
            (props.direction === 'next' && '-20px') ||
            (props.direction === 'previous' && '20px')}
        )
        translateY(-50%);
      opacity: 1;
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);

    &:before,
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 2px;
      background-color: white;
      transform-origin: ${(props) =>
        (props.direction === 'next' && '100% 50%') ||
        (props.direction === 'previous' && '0% 50%')};
      transition: 0.3s;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }

  .arrowTip {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${(props) => (props.direction === 'next' ? '50%' : null)};
    left: ${(props) => (props.direction === 'previous' ? '50%' : null)};
    color: white;
    opacity: 0;
    transition: 0.3s;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const ControlArrow = ({direction, name, path}) => {
  return (
    <Btn
      direction={direction}
      className={`controlArrow ${direction}`}
      to={path}
    >
      <div className='arrow'></div>
      <span className='arrowTip'>{name}</span>
    </Btn>
  );
};

export default ControlArrow;
