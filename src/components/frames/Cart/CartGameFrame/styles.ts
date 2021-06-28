import styled from 'styled-components'
import { Button } from '../../Menu/styles'
import { Title } from '../styles'

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;

  display: flex;
  width: 100%;
  height: 125px;
  padding: 12px 15px;

  transition: 0.5s;

  &:after {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: 0;
    background: #9C9C9C;
    height: 1px;
    width: 480px;

  }
` 

export const GameTitle = styled(Title)`
  font-weight: ${props => props.price ? '600' : '800'};
  text-align: right;

  opacity: ${props => props.price ? '70%' : '100%'};

  padding: 0;
  margin: 0;
` 

export const CounterContainer = styled.div`
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 0;

`
export const InfoContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  border: none;
  padding: 0;

`

export const CoverContainer = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  border: none;
  padding: 0;
`

export const Control = styled(Button)`
  border-radius: 0;
  width: 24px;
  height: 24px;

  background: none;

  & > svg {
    width: 100%;
    height: 100%;
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  background: #FAFAFF;
  box-shadow: inset 0px 4px 4px rgba(240, 240, 255, 0.8);
  border-radius: 5px;

  font-size: 24px;
  font-weight: 600;

  
`