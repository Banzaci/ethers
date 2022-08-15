import React from 'react';
import styled from 'styled-components';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Content, FontWrapper } from './Components';

const FooterWrapper = styled.footer`
  display: flex;
  height: 300px;
  background-color: #335855;
  width: 100%;
  justify-content: center;

`;
const Fotter = () => {
  return (
    <FooterWrapper>
        <Content>
          <FontWrapper><FontAwesomeIcon icon={ faSun } size="3x" color="white" /></FontWrapper>
        </Content>
    </FooterWrapper>
  )
}

export default Fotter;