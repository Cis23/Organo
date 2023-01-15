import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 8rem 0;
  
  form { 
    background-color: #f2f2f2; 
    border-radius: 2rem;
    max-width: 60rem;
    min-width: 20rem;
    padding: 3.6rem;  
    display: flex;
    flex-direction: column;
    gap: 3.3rem;
    h2{
      font-size: 2.4rem;
    }
    .group{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      
      div{
        flex: 1 1 auto;
      }
      @media (max-width:659px){
        gap: 3.3rem;
      }
    }
    button{
      width: 20rem;
      margin: auto;
    }
  }
`
// .formulario{
// }
// form {
// }

