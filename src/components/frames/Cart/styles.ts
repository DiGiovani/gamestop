import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;

  background: #FFF;

  right: 0;

  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;

  z-index: ${props => props.active ? '4' : '-2'};
  opacity: ${props => props.active ? '1' : '0'};
  transition: 0.5s;
`

export const Header = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #2F80ED;

  width: 100%;
  height: 100px;
  padding: 0 17px;

  &:after {
    position: absolute;

    content: " ";
    background: #FFF;

    height: 5px;
    width: 480px;

    bottom: 8px;
    right: 0;
  }
`

export const Title = styled.h1`
  font-size: ${props => props.size}px;

  color: ${props => props.color || '#FFF'};
`


