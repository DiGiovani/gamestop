import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;

  background: #FFF;

  right: 0;

  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  padding-bottom: 300px;

  z-index: ${props => props.active ? '4' : '-2'};
  opacity: ${props => props.active ? '1' : '0'};
  transition: 0.5s;
`

export const Header = styled.header`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #2F80ED;

  width: 100%;
  height: 100px;
  padding: 0 17px;

  &after {
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
export const Footer = styled.footer`
  position: fixed;
  bottom: 50px;
  right: 20px;

  width: 440px;
  height: 200px;
  padding: 15px;

  background: #FFFFFF;
  box-shadow: 5px 10px 30px rgba(47, 128, 237, 0.1);
  border-radius: 20px;

  z-index: 5;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 700;

  width: 100%;
  height: ${props => props.total ? '45px' : '25px'};

  & > h2:first-child {
    font-size: ${props => props.total ? '34px' : '14px'};
    color: #282828;
    opacity: ${props => props.total ? '100%' : '80%'};
  }

  & > h2:last-child {
    font-size: ${props => props.total ? '36px' : '18px'};
    color: #2F80ED;
    opacity: ${props => props.total ? '100%' : '80%'};
  }

  & > h2.discount:before {
    content: '-'
  }
  
`

