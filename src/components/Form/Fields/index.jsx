import { useState } from "react";
import InputMask from 'react-input-mask'
import { Div } from "./styled";

export const FieldInput = ({label, onChange, ...props}) => {
  const [value,setValue] = useState('');
  const hadleChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <Div>
      <InputMask 
        className={value ? 'has-val input' : 'input'}
        mask={props.mask? props.mask:''}
        value={value}
        onChange={hadleChange}
        type={props.type} 
        name={props.name} 
        id={props.name} 
        {...props}        
        />
        {label && <label htmlFor={props.name}>{label}</label>}
        <span className="error"></span>
    </Div> 
  );
}

export const FieldSelect = ({ items, label,...props}) => {
  const [value, setValue] = useState('');
  const handleValue = (e) => {
    setValue(e.currentTarget.value);
  } 
  return (
    <Div>
      <select 
        name={props.name} 
        id={props.name} 
        className={value ? 'has-val input' : 'input'}
        onChange={(e) => handleValue(e)}
        {...props}
      >
        {
          items.map( ({description,value}, index) => {
            return <option key={index+1} value={value} >{description}</option>
          })
        }
      </select>
      {label && <label htmlFor={props.name}>{label}</label>}
      <span className="error"></span>
    </Div>
  )
}
