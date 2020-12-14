import React from 'react';

import figure from 'assets/images/figure.png';
import background from 'assets/images/bg.png';
import logo from 'assets/icons/logo.svg';
import { Props } from './types';
import './styles.scss';

const Home = ({ children }: Props) => (
  <div className="background-container">
    {children}
    <img alt="" src={logo} className="background-logo" />
    <img alt="" src={background} className="background-image" />
    <img alt="" src={figure} className="background-figure" />
  </div>
);

export default Home;
