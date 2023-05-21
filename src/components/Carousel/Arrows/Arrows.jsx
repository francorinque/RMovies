import { Button } from '../../UI'
import { ArrowsStyled, ArrowLeft, ArrowRight } from './Arrows.styled'

import { IoArrowBackOutline, IoArrowForward } from 'react-icons/io5'

let size = 40

const Arrows = ({ navigation }) => {
  return (
    <ArrowsStyled>
      <ArrowLeft>
        <Button w={size} h={size} onClick={() => navigation('left')}>
          <IoArrowBackOutline size={20} />
        </Button>
      </ArrowLeft>

      <ArrowRight>
        <Button w={size} h={size} onClick={() => navigation('right')}>
          <IoArrowForward size={20} />
        </Button>
      </ArrowRight>
    </ArrowsStyled>
  )
}
export default Arrows
