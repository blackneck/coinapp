import React from 'react';

import Background from './Background';
import { Props } from './types';

const BackgroundContainer = ({ children }: Props) => (
  <Background children={children} />
);

export default BackgroundContainer;
