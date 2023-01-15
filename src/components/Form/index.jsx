import { Section } from "./styled";

const Form = ({children,...props}) => {  
  return (
    <Section className="formulario"> 
      <form onSubmit={props.handleSubmit}> 
        {children}
      </form>
    </Section>
  )
}
export default Form;