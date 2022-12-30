import { useState } from 'react';
import {Div, Label, Select} from './styled';

const FieldSelect = ({ items, label,...props}) => {
  const [val, setVal] = useState('');
  const handleSelected = (e) => {
    setVal(e.currentTarget.value);
    console.log(val)
  } 
  return (
    <Div className="group-form">
      <Select 
        name={props.name} 
        id={props.name} 
        className={val ? 'has-val' : ''}
        onChange={(e) => handleSelected(e)}
      >
        {
          items.map( ({description,value}, index) => {
            return <option key={index+1} value={value} >{description}</option>
          })
        }
      </Select>
      {label && <Label htmlFor={props.name}>{label}</Label>}
    </Div>
  )
}

export default FieldSelect;