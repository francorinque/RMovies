import { Banner, PlayTrailer } from './DetailsBanner.styled'

import Button from '../../../components/UI/Button/Button'
import { IoPlayCircleSharp } from 'react-icons/io5'
import { useHomeStore } from '../../../store/home'

const DetailsBanner = ({ details }) => {
  const { imagesUrl } = useHomeStore((state) => state)

  return (
    details && (
      <Banner
        bgurl={`${imagesUrl.backdrop}${
          details.backdrop_path && details.backdrop_path
        }`}
        alt={details.original_title}
      >
        <PlayTrailer>
          <Button w={70} h={70}>
            <IoPlayCircleSharp size={25} />
          </Button>
        </PlayTrailer>
      </Banner>
    )
  )
}
export default DetailsBanner
