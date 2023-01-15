import { Btn } from './styled'

const Button = ({children,...props}) => {
  return (
    <Btn className='button'>{children}</Btn>
  )
}
export default Button;