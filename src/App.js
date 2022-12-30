import Banner from './components/Banner'
import FieldInput from './components/Form/FieldInput';
import FieldSelect from './components/Form/FieldSelect';
import Form from './components/Form';
import listTimes from './listTimes';
import CheckboxCustum from './components/Form/checkboxCustum'; 
function App() {
  return (
    <div className="App">
      {/* <Banner/> */}

      <Form>
        <h2>Preencha os dados para criar o Card do colaborador</h2>

        <FieldInput
          type={"text"}
          label="Nome" 
          name="nome"
          placeholder="Digite seu nome"
        />
        <FieldInput
          type="text"
          label="Cargo" 
          name="cargo"
          placeholder="Digite seu Cargo"
        />
        <FieldInput
          type="text"
          label="Imagem" 
          name="cargo"
          placeholder="Digite seu endereço de imagem"
        />
        <FieldInput
          mask="999.999.999-99"
          type="text"
          label="CPF" 
          name="cpf"
          placeholder="Digite seu cpf"
        />
        <FieldInput
          mask="(99) 99999-9999"
          type="text"
          label="Telefone" 
          name="telefone"
          placeholder="Digite seu telefone"
        />
        
        <FieldSelect
          label="Times"
          name='times'
          items={listTimes}
        />

        <CheckboxCustum
          label="Status"
          id="status"
        />
      </Form>

    </div>
  );
}

export default App;
