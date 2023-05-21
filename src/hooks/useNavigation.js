// import { useRef } from 'react'

// export const useNavigation = () => {
//   const containerRef = useRef()

//   const navigation = (dir) => {
//     const container = containerRef.current

//     const scrollAmount =
//       dir === 'left'
//         ? container.offsetWidth - container.scrollLeft
//         : container.offsetWidth + container.scrollLeft

//     container.scrollTo({
//       left: scrollAmount,
//       behavior: 'smooth',
//     })

//   }
// }
