import React, {useEffect, useContext} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import styled from 'styled-components';

import {SiteContext} from 'store/store';

import Header from 'Components/Organisms/Header';
import ControlArrow from 'Components/Molecules/ControlArrow';

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

const Section = styled.section`
	position: absolute;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
`;

const TGroup = styled(TransitionGroup)`
	position: relative;
	perspective: 1800px;
	transform-style: preserve-3d;
`;

const setPage = (pathname) => {
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

const findPage = (index, pages, location) => {
	const actualPage = pages.find((page) => page.path === location.pathname);
	const foundPage = pages.find(
		(page) => page.order === actualPage.order + index
	);
	return foundPage;
};

const Root = () => {
	const location = useLocation();
	const {
		currentPage: [currentPage, setCurrentPage],
		pageDirection: [pageDirection, setPageDirection],
		nextPage: [nextPage, setNextPage],
		previousPage: [previousPage, setPreviousPage],
		// eslint-disable-next-line no-unused-vars
		isTransitionActive: [isTransitionActive, setIsTransitionActive],
		pages,
	} = useContext(SiteContext);

	useEffect(() => {
		setCurrentPage(setPage(location.pathname));
		setNextPage(findPage(+1, pages, location));
		setPreviousPage(findPage(-1, pages, location));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		let newPage = setPage(location.pathname);
		let newPageOrder = pages.find((page) => page.name === newPage).order;

		let curPage = currentPage;
		if (!currentPage) {
			curPage = newPage;
		}
		let curPageOrder = pages.find((page) => page.name === curPage).order;

		if (newPage !== curPage) {
			let direction = curPageOrder < newPageOrder ? 'left' : 'right';
			// Set State
			setCurrentPage(newPage);
			setPageDirection(direction);
			setNextPage(findPage(+1, pages, location));
			setPreviousPage(findPage(-1, pages, location));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	const handleTransitionActivator = () => {
		setIsTransitionActive((prev) => !prev);
	};

	const routes = pages.map((page) => {
		const {order, path, component} = page;
		return <Route key={order} exact path={path} component={component} />;
	});

	const previousArrow = previousPage ? (
		<ControlArrow
			direction='previous'
			name={previousPage.name}
			path={previousPage.path}
		/>
	) : null;

	const nextArrow = nextPage ? (
		<ControlArrow direction='next' name={nextPage.name} path={nextPage.path} />
	) : null;

	return (
		<>
			<Header />
			<Wrapper>
				<TGroup className={`transitionGroup ${pageDirection}`}>
					<CSSTransition
						key={location.key}
						timeout={1300}
						classNames='route'
						location={location}
						unmountOnExit={true}
						mountOnEnter={true}
						onEnter={handleTransitionActivator}
						onExited={handleTransitionActivator}
					>
						<Section className='routeSection'>
							<Switch location={location}>{routes}</Switch>
							{previousArrow}
							{nextArrow}
						</Section>
					</CSSTransition>
				</TGroup>
			</Wrapper>
		</>
	);
};

export default Root;
