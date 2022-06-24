import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1900px;
  margin: 0 auto;
  margin-top: 5rem;
`

export const Content = styled.div`
  text-align: center;

  ul{
    padding: 2rem 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
    li{
      margin-bottom: 2rem;
      border-radius: 6px;
      width: 400px;
      background: white; 
      box-shadow: 4px 7px 11px -1px rgba(0,0,0,0.65);
      transition: transform .9s ;
        :hover{
          transform: scale(1.05);
        }
      img{
        width: 350px;
        height: 250px;
      }
    }
  }
`
export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: #000;
  text-decoration: none;
  border-radius: 27px;
  :after{
    content: "↑";
    font-size: 32px;
    font-weight: bold;
    color: aliceblue;
    transition: margin-top 250ms;
  }

  :hover::after{
    margin-top:-8px;
  }
`