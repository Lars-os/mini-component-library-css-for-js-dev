/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  const styles = {
    small: {
      "--height": 8 + "px",
      "--padding": 0,
      "--border-radius": 0
    },
    medium: {
      "--height": 12 + "px",
      "--padding": 0,
      "--border-radius": 0
    },
    large: {
      "--height": 24 + "px",
      "--padding": 4 + "px",
      "--border-radius": value >= 99.8 ? 4/16 + "rem" : 4/16 + "rem 0 0 " + 4/16 + "rem"
    }
  }


  return <>
    <StyledProgressBar style={styles[size]} id="loadinglabel" max="100" value={value}></StyledProgressBar>
  </>;
};

const StyledProgressBar = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* styles */
  width: var(--width);
  height: var(--height);
  border-radius: ${4/16}rem;
  border-style: none;
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px #80808059 inset;


  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
    border-radius: var(--border-radius);
  }



`;

export default ProgressBar;
