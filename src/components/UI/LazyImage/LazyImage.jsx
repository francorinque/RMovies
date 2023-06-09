import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

const LazyImage = ({ src, alt }) => {
  return (
    <LazyLoadImage
      effect='opacity'
      src={src}
      alt={alt}
      width='100%'
      height='100%'
    />
  )
}
export default LazyImage
