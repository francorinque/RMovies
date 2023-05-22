import { Wrapper, Text } from './NotFound.styled'
import ErrorPhoto from '../../../assets/error.png'

const NotFound = () => {
  return (
    <Wrapper>
      <Text>This Page Not Found</Text>
      <img src={ErrorPhoto} alt='error 404' />
    </Wrapper>
  )
}
export default NotFound
