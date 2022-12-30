import './index.css'
const Form = ({children}) => { 
  return <>
    <section className="formulario">
      <form> 
        {children}
      </form>
    </section>
  </>
}

export default Form;