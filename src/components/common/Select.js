import React from 'react';
import styled from 'styled-components';

import Colors from '../../styles/Colors';
import { MdArrowDropDown } from 'react-icons/md';

const StyledSelectBlock = styled.div`
  width: 100%;
  border-radius: 4px;
  padding: 1px;
  background-color: ${Colors.onSurfaceLow};
  &:hover {
    background-color: ${Colors.onSurfaceMedium};
  }
  .out-line {
    width: 100%;
    background-color: ${Colors.surface};
    border-radius: 3.5px;
    display: flex;
    align-items: center;
    padding: 14px;
  }
  select {
    appearance: none;
    border: none;
    cursor: pointer;
    outline: none;
    &::-ms-expand {
      display: none;
    }
    width: 100%;
    background-color: ${Colors.surface};
    color: ${Colors.onSurfaceMedium};
  }
  svg {
    font-size: 1.5rem;
    color: ${Colors.onSurfaceMedium};
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }
  /* focus될때 아웃라인의 색과 두께를 조절  */
  &:focus-within {
    background-color: ${Colors.primaryMatte[5]};
    padding: 2px;
    .out-line:focus-within {
      border-radius: 2px;
      padding: 13px;
    }
    svg {
      transform: rotate(180deg) translateY(-4px);
    }
  }
`;

const Select = ({ selectProps, children }) => {
  return (
    <StyledSelectBlock>
      <div className="out-line">
        <select {...selectProps}>{children}</select>
        <MdArrowDropDown />
      </div>
    </StyledSelectBlock>
  );
};

export default Select;
