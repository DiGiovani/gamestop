import styled from 'styled-components'

export const Container = styled.div`
  background-color: #E6F0FF;
  width: 100%;
  min-height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 0 40px;
  padding: 0 40px;
`

export const Button = styled.button`
  position: ${props => props.logo ? "" : "relative"};

  color: #FFF;

  background: ${props => props.logo ? "none" : "#2F80ED"};
  width: ${props => props.logo ? "auto" : "50px"};
  height: ${props => props.logo ? "100%" : "50px"};
  border-radius: ${props => props.logo ? "0" : "50%"};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  cursor: pointer;

  z-index: ${props => props.logo ? '0' : '2'};
  transition: 0.2s;

  ${props => {
    if(props.number > 0) {
      return(
        `&:after {
          position: absolute;

          top: -2px;
          right: -2px;

          content: '${props.number}';
          width: 14px;
          height: 14px;
          border-radius: 50%;

          font-family: 'Exo 2', sans-serif;
          font-weight: 900;
          font-size: 10px;

          background: #FF0000;
        }`
      )
    }
  }}

  &:hover {
    filter: brightness(0.8);
  }
`