import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div<{ color?: boolean; }>`
  background-color: ${props => props.color ? 'white': 'transparent'};
  width: 100%;
  height: 100%;
  margin-bottom: 88px;
`;

export const Content = styled.article`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
`;

export const FontWrapper = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 44px 0 12px 0;
`;