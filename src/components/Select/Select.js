import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SingleSelect value={value} onChange={onChange}>
      {children} 
    </SingleSelect>
  );
};

const SingleSelect = styled.select`
  -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;

  padding: 12px 52px 12px 16px;
  border: none;
  border-radius: ${8/16}rem;
  width: min-content;

`;

export default Select;
