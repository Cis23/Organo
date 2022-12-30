import { useState, useEffect } from "react";
import { Div } from "./styled";

const CheckboxCustum = ({label, id,...props}) => {
  const [checked, setChecked] = useState(false)
  const handleChange = (event) => {
    setChecked(!checked)
  }
  useEffect(() => { 
    const indicadorAtivo = document.querySelector('.txtIconButtonAtivo');
    const indicadorInativo = document.querySelector('.txtIconButtonInativo');
    if(checked){
      indicadorAtivo.style.opacity = 1
      indicadorInativo.style.opacity = 0
    }
    if(!checked){
      indicadorInativo.style.opacity = 1
      indicadorAtivo.style.opacity = 0
    }
  },[checked])
  return(
    <Div>
      <label onChange={(event) => handleChange(event)}>
        <span>{label}</span>
        <div className="box-input">
          <input type="checkbox" name={id} id={id} />
          <span className="iconButton">
            <span className="txtIconButtonInativo">Inativo</span> 
            <span className="txtIconButtonAtivo">Ativo</span> 
          </span>
        </div>
      </label>
    </Div>
  )
}
export default CheckboxCustum;