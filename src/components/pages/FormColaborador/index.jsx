import React from "react";
import Form from "../../Form" 
import listTimes from './../../../listTimes';
import Button from '../../Button'
import { FieldInput,  FieldSelect} from '../../Form/Fields';
import { getColaborador } from "../../../services/script";
const FormColaborador = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const colaborador = getColaborador(e.target);
    console.log(colaborador);
  }
  
  return(
    <Form handleSubmit={handleSubmit}>
      <h2>Preencha os dados para criar o Card do colaborador</h2>
      <div className='group'>
        <FieldInput
          type={"text"}
          label="Nome" 
          name="nome"
          required
        />
        <FieldInput
          type="text"
          label="Cargo" 
          name="cargo"
          required
        />
      </div>
      
      <FieldInput
        type="text"
        label="Imagem" 
        name="imagem"
        required
      />
      
      <FieldSelect
        label="Times"
        items={listTimes}
        name='time'
        required
      />

      <Button type="submit">Enviar</Button>
    </Form>
  )
}
export default FormColaborador