import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  
  label{
    color: #5e5c5c;
    display: block;
    font-size: 1.6rem;
    margin-bottom: .8rem;
    transition: .4s ease-out;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 1rem;
  }

  .input{
    box-sizing: border-box;
    background: #FFF;
    border: none;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.295);
    border-radius: .2rem;
    font-size: 1.6rem;
    padding: 1rem;
    width: 100%;
    /* transition: all .1s ease-out; */
    :focus{ 
      outline: .2rem solid #837e7e;
      outline-offset: -.2rem;
    }
  }
  .has-val + label,
  .has-val + label,
  .input:focus + label{ 
    font-size: 1.3rem;
    top: -1.4rem;
    padding: 0;
  }
  span.error {
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    color: red;
  }
`;

export const Section = styled.section`

`;