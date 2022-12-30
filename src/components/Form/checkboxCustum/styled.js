import styled from "styled-components";

export const Div = styled.div`
  display: flex;

  label{
    font-size: 1.6rem;
    padding-right: 1rem;
    cursor: pointer;

    div{
      display: inline-block;
      width: 7rem;
      height: 3.4rem;
      position: relative;
      top: 1rem;

      input[type=checkbox]{
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
      }

      .iconButton{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 4rem;
        background-color: #0c2a53;

        
        .txtIconButton{
          position: relative;
          font-size: 1rem;
        }
        .txtIconButtonInativo,
        .txtIconButtonAtivo
        {
          position: absolute;
          font-size: 1rem;
        }
        .txtIconButtonAtivo{
          left: 1rem;
          color: #02fa02;
        }
        .txtIconButtonInativo{
          left: 3.4rem;
          color: #f0f8ff;
        }

      }
      .iconButton::before{
        content: '';
        position: absolute;
        width: 2.6rem;
        height: 2.6rem;
        background: #f0f8ff;
        left: .4rem;
        bottom: .4rem;
        border-radius: 50%;
        transition: .4s all ease;
        z-index: 1;
      }
      input[type=checkbox]:checked + span::before{
        background: #02fa02; 
        transform: translateX(3.6rem)
      }
    }
  }

`