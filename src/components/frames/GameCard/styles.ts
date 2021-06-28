import styled from 'styled-components'
import { Button } from '../Menu/styles'

export const Container = styled.div`
  width: 250px;
  height: 300px;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  background: #FFF;
  box-shadow: 2px 5px 15px rgba(50, 134, 247, 0.15);
  backdrop-filter: blur(20px); 

  border-radius: 5px;
`

export const ImageFrame = styled.div`
  width: 100%;
  height: 230px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const TitleFrame = styled.div`
  position: relative;

  width: 100%;
  height: 70px;

  border-top: 1px #454545 solid;

  & > h2 {
    position: absolute;

    top: 5px;
    left: 10px;
    width: 180px;

    display: flex;    

    font-size: 18px;
    line-height: 19px;
    font-weight: 800;
    letter-spacing: -0.05em;

    padding: 0;
    margin: 0;
  }

  & > h3 {
    position: absolute;

    top: auto;
    bottom: 5px;
    left: 10px;

    font-height: 14px;
    color: #2f81edb3;

    padding: 0;
    margin: 0;
  }
`

export const CartButton = styled(Button)`
  position: absolute;

  width: 40px;
  height: 40px;

  right: 15px;
  bottom: 15px;

  &:hover {
    filter: brightness(0.8);
  }
  transition: .2s;
`