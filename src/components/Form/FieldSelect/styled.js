import styled from "styled-components";

export const Div = styled.label`
  position: relative;
  select{
    /* background: red; */
  }
  label{
    position: absolute;
    top:.349rem;
    transition: .4s ease-out;
    padding: 0;
  }
  select.has-val + label{ 
    font-size: 1.3rem;
    top: -1.6rem;
  }
`

export const Label = styled.label`
  display: block;
  margin-bottom: .8rem;
  font-size: 2.4rem;
`

export const Select = styled.select`  
  box-sizing: border-box;
  background: #FFF;
  box-shadow: .1rem .1rem .3rem rgba(0, 0, 0, 0.295);
  width: 100%;
  font-size: 1.6rem;
  border: none;
  padding: 1rem;
  overflow: auto;
  
  &&:focus {
    outline: none;
    border: none;
    background-color: #33198f; 
    color: #c8baf8;
  }

  &&::-webkit-scrollbar{
    background: #1d0479;
    width: 1rem;
  }

  &&::-webkit-scrollbar-track {
    background: #190857;
    border-radius: 5rem;
  }

  &&::-webkit-scrollbar-thumb {
    background-color:#402c86; 
    border-radius: 5rem; 
    border: 3px solid #190857; 
  }

`