import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Container from './Components/Container';
import GlobalStyles from './Components/GlobalStyles';

import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

import Bamar from './Pages/Bamar';
import WeatherApp from './Pages/WeatherApp';
import Sportregeneracja from './Pages/Sportregeneracja';
import Swiezaskibka from './Pages/Swiezaskibka';

const pages = [
  {path: '/', name: 'Home', order: 0, component: Home},
  {path: '/about', name: 'About', order: 1, component: About},
  {path: '/portfolio', name: 'Portfolio', order: 2, component: Portfolio},
  {path: '/contact', name: 'Contact', order: 3, component: Contact},
];

const portfolioPages = [
  {path: '/portfolio/bamar', name: 'Bamar', order: 10, component: Bamar},
  {
    path: '/portfolio/weatherapp',
    name: 'Weather App',
    order: 11,
    component: WeatherApp,
  },
  {
    path: '/portfolio/sportregeneracja',
    name: 'Sportregeneracja',
    order: 12,
    component: Sportregeneracja,
  },
  {
    path: '/portfolio/swiezaskibka',
    name: 'Swieża skibka',
    order: 13,
    component: Swiezaskibka,
  },
];

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Container pages={pages} portfolioPages={portfolioPages} />
    </Router>
  );
};

export default App;
