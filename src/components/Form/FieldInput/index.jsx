import "./index.css";
import InputMask from 'react-input-mask'
import { useState } from "react";


const FieldInput = ({label, onChange, ...props}) => {
  const [value,setValue] = useState('');
  return (
    <div className="group-form">
      {label && <label htmlFor={props.name}>{label}</label>}
      <InputMask 
        mask={props.mask? props.mask:''}
        value={value}
        onChange={ (event) => setValue(event.target.value) }
        type={props.type} 
        name={props.name} 
        id={props.name} 
        placeholder={props.placeholder} 
      />
    </div> 
  );
}
export default FieldInput;