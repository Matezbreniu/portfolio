import React, {Component} from 'react';

import {Switch, Route, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import styled from 'styled-components';

import Header from './Header';
import ControlArrow from '../ControlArrow';

const Wrapper = styled.main`
  .left .route-enter-active {
    transform-origin: 0% 50%;
    animation: moveRightEnter 1s both 0.3s;
  }

  .left .route-exit-active {
    transform-origin: 100% 50%;
    animation: moveRightExit 1s both 0.3s;
  }

  .right .route-enter-active {
    transform-origin: 100% 50%;
    animation: moveLeftEnter 1s both 0.3s;
  }

  .right .route-exit-active {
    transform-origin: 0% 50%;
    animation: moveLeftExit 1s both 0.3s;
  }

  div.transitionGroup {
    position: relative;
    perspective: 1800px;
    transform-style: preserve-3d;
  }
  section.routeSection {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  @keyframes moveLeftExit {
    0% {
      transform: translate3d(0%, 0, 0) rotateY(0deg);
    }

    50% {
      transform: translate3d(50%, 0, -225px) rotateY(45deg);
    }

    100% {
      transform: translate3d(100%, 0, 0) rotateY(90deg);
    }
  }

  @keyframes moveLeftEnter {
    0% {
      transform: translate3d(-100%, 0, 0) rotateY(-90deg);
    }

    50% {
      transform: translate3d(-50%, 0, -225px) rotateY(-45deg);
    }

    100% {
      transform: translate3d(0, 0, 0) rotateY(0deg);
    }
  }
  @keyframes moveRightExit {
    0% {
      transform: translate3d(0%, 0, 0) rotateY(0deg);
    }

    50% {
      transform: translate3d(-50%, 0, -225px) rotateY(-45deg);
    }

    100% {
      transform: translate3d(-100%, 0, 0) rotateY(-90deg);
    }
  }

  @keyframes moveRightEnter {
    0% {
      transform: translate3d(100%, 0, 0) rotateY(90deg);
    }

    50% {
      transform: translate3d(50%, 0, -225px) rotateY(45deg);
    }

    100% {
      transform: translate3d(0, 0, 0) rotateY(0deg);
    }
  }
`;

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.setPage(this.props.location.pathname),
      curPageOrder: this.setPageOrder(this.props.location.pathname),
      newPageOrder: null,
      nextPage: this.findPage(+1),
      previousPage: this.findPage(-1),
      isMenuActive: false,
      isTransitionActive: false,
    };
  }
  componentDidUpdate() {
    let newPage = this.setPage(this.props.location.pathname);
    let newPageOrder = this.props.pages.find((page) => page.name === newPage)
      .order;

    let curPage = this.state.currentPage;
    let curPageOrder = this.props.pages.find((page) => page.name === curPage)
      .order;

    if (newPage !== curPage) {
      let direction = curPageOrder < newPageOrder ? 'left' : 'right';
      // Set State
      this.setState({
        currentPage: newPage,
        pageDirection: direction,
        curPageOrder: curPageOrder,
        newPageOrder: newPageOrder,
        nextPage: this.findPage(+1),
        previousPage: this.findPage(-1),
      });
    }
  }
  setPageOrder = (path) => {
    const pageOrder = this.props.pages.find((page) => page.path === path).order;
    return pageOrder;
  };
  setPage = (pathname) => {
    let page = null;
    switch (pathname) {
      case '/':
        page = 'Home';
        break;
      case '/about':
        page = 'About';
        break;
      case '/portfolio':
        page = 'Portfolio';
        break;
      case '/contact':
        page = 'Contact';
        break;
      case '/portfolio/bamar':
        page = 'Bamar';
        break;
      case '/portfolio/weatherapp':
        page = 'Weatherapp';
        break;
      case '/portfolio/sportregeneracja':
        page = 'Sportregeneracja';
        break;
      case '/portfolio/swiezaskibka':
        page = 'Swiezaskibka';
        break;
      default:
        page = 'Home';
    }
    return page;
  };

  findPage = (index) => {
    const actualPage = this.props.pages.find(
      (page) => page.path === this.props.location.pathname
    );
    const foundPage = this.props.pages.find(
      (page) => page.order === actualPage.order + index
    );
    return foundPage;
  };

  handleMenuActivator = () => {
    this.setState({
      isMenuActive: !this.state.isMenuActive,
    });
  };

  handleTransitionActivator = () => {
    this.setState({
      isTransitionActive: !this.state.isTransitionActive,
    });
  };

  render() {
    return (
      <>
        <Header
          isTransitionActive={this.state.isTransitionActive}
          isMenuActive={this.state.isMenuActive}
          handleMenuActivator={this.handleMenuActivator}
          pages={this.props.pages}
          currentPath={this.props.location.pathname}
        />
        <Wrapper>
          <TransitionGroup
            className={`transitionGroup ${this.state.pageDirection}`}
          >
            <CSSTransition
              key={this.props.location.key}
              timeout={1300}
              classNames='route'
              onEnter={this.handleTransitionActivator}
              onExited={this.handleTransitionActivator}
            >
              <section className='routeSection'>
                <Switch location={this.props.location}>
                  {this.props.pages.map((page) => {
                    const {order, path, component} = page;
                    return (
                      <Route
                        key={order}
                        exact
                        path={path}
                        component={component}
                      />
                    );
                  })}
                </Switch>
                {this.state.previousPage ? (
                  <ControlArrow
                    direction='previous'
                    name={this.state.previousPage.name}
                    path={this.state.previousPage.path}
                  />
                ) : null}
                {this.state.nextPage ? (
                  <ControlArrow
                    direction='next'
                    name={this.state.nextPage.name}
                    path={this.state.nextPage.path}
                  />
                ) : null}
              </section>
            </CSSTransition>
          </TransitionGroup>
        </Wrapper>
      </>
    );
  }
}
export default withRouter(Container);
