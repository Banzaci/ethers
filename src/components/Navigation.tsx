import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';

function Router() {
  const [ isOpen, setIsOpen ] = useState(false);
  const onToggleMenu = () => setIsOpen(!isOpen);

  return (
    <Navigation>
      <WrapperMobile>
        <WrapperMobileContainer isOpen={ isOpen }>
          <WrapperMobileNavigation>
            <ItemMobile>
              <Link to="/" onClick={ onToggleMenu }>HOME</Link>
            </ItemMobile>
          </WrapperMobileNavigation>
        </WrapperMobileContainer>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={onToggleMenu}
          width={40}
          height={40}
          strokeWidth={2}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
      </WrapperMobile>
      <WrapperDesktop>
        <ItemWrapperDesktop>
          <Item>
            <Link to="/">HOME</Link>
          </Item>
        </ItemWrapperDesktop>
      </WrapperDesktop>
    </Navigation>
  );
}
export default Router;


const Navigation = styled.nav`
  position:  absolute;
  display: flex;
  width: 100%;
  @media only screen and (min-width : 920px) {
    top: 8px;
  }
`;

const ItemWrapperDesktop = styled.ul`
  display: flex;
`;

const WrapperDesktop = styled.div`
  display: none;
  @media only screen and (min-width : 920px) {
    display: flex;
    height: 200px;
    justify-content: center;
    width: 100%;
    margin-top: 24px;
    flex-direction: column;
    align-items: center;
  }
`;

const WrapperMobile = styled.div`
  margin: 12px;
  @media only screen and (min-width : 920px) {
    display: none;
  }
`;

const WrapperMobileContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: ${props => props.isOpen ? 0 : -500 }px;
  background-color: black;
  width: 100%;
  max-width: 498px;
  transition: all .4s;
  padding: 12px;
  @media only screen and (min-width : 920px) {
    display: none;
  }
`;

const WrapperMobileNavigation =  styled.ul`
  margin: 40px;
`;

const ItemMobile = styled.li`
  padding: 12px 24px;
  a {
    color: #FFF;
    text-decoration: none;
    &:hover {
      color: #FFF;
    }
  }
`;

const Item = styled.li`
  line-height: 24px;
  font-weight: 400;
  a {
    color: #FFF;
    text-decoration: none;
    padding: 12px 24px;
    transition: all 0.2s;
    font-size: 16px;
    &:hover {
      background-color: rgba(255, 180, 0, .8);
    }
  }
`;
