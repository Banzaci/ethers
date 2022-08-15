import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  )
}

export default Header;