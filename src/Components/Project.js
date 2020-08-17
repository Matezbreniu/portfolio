import React, {Component} from 'react';

import styled from 'styled-components';
import gsap from 'gsap';
import {Link} from 'react-router-dom';

const Container = styled(Link)`
  position: relative;
  margin: 30px 0;
  width: 100%;
  background-image: url(${(props) => props.backgroundimage});
  background-position: center;
  background-size: cover;
  text-decoration: none;
  color: var(--color-font);
  box-shadow: 5px 5px 0px 0px var(--color-background);
  overflow: hidden;
`;

const Title = styled.h3`
  position: relative;
  top: 0;
  padding: 2px;
  width: 100%;
  text-align: center;
  color: var(--color-font-dark);
  background-color: var(--color-background-white);
  font-size: 0.9rem;
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  padding-top: 50%;
  z-index: 0;
`;

const TechContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: -100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

const Tech = styled.span`
  padding: 3px 7px;
  border: 1px solid;
  border-color: var(--color-background);
  border-radius: 5px;
  height: fit-content;
  background-color: var(--color-background-light);
  box-shadow: 1px 1px 0px 0px var(--color-background);
  transform: translateX(-50px) scaleY(0);
  text-align: center;
  font-size: 0.7rem;
  opacity: 0;
`;

class Project extends Component {
  constructor(props) {
    super(props);
    this.techContainer = React.createRef();
    this.state = {
      isHovered: false,
    };
  }
  tl = null;

  handleTechContainerAnimation = () => {
    const techContainer = this.techContainer.current;
    const techList = techContainer.childNodes;
    const tl = gsap.timeline({paused: true});
    tl.to(techContainer, {
      y: '100%',
      duration: 0.3,
    });
    tl.to(techList, {
      x: 0,
      scaleY: 1,
      opacity: 1,
      duration: 0.2,
      stagger: 0.2,
    });
    return tl;
  };

  handleMouseEnter = () => {
    this.tl.play();
  };
  handleMouseLeave = () => {
    this.tl.reverse(0.3);
  };

  componentDidMount() {
    this.tl = this.handleTechContainerAnimation();
  }

  render() {
    const {name, technology, link, background} = this.props.project;
    return (
      <Container to={link} backgroundimage={background}>
        <Title>{name}</Title>
        <Content
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <TechContainer ref={this.techContainer}>
            {technology.map((tech, index) => (
              <Tech key={index}>{tech}</Tech>
            ))}
          </TechContainer>
        </Content>
      </Container>
    );
  }
}

export default Project;
