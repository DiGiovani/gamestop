import styled from 'styled-components'
import { Button } from '../Menu/styles'

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

export const CheckButton = styled(Button)`
  position: absolute;

  bottom: 10px;
  right: 13px;

  border-radius: 50px;

  width: 180px;
  height: 50px;

  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.05em;

  padding: 10px;
`

export const FormInput = styled.input`
  position: absolute;

  bottom: 10px;
  left: 5px;

  height: 50px;
  width: 150px;

  box-shadow: inset 0px 4px 4px rgba(240, 240, 255, 0.8);

  border-radius: 50px;
  border: 2px solid ${props => {
    if (props.status == 'wrong') return "#F00";
    if (props.status == 'right') return '#55a630';
    if (props.status == 'empty') return "#2F80ED";
  }};

  background: #FDFDFF;

  font-size: 22px;
  font-weight: 600;
  font-family: 'Exo 2', sans-serif;

  padding: 15px;  
`

