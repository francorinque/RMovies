import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const CircleProgressbar = ({ width, percentage }) => {
  let size = width || '100px'

  return (
    <div style={{ width: `${size}` }}>
      <CircularProgressbar
        value={percentage * 10}
        text={`${percentage?.toFixed(1)}`}
        strokeWidth={10}
        styles={buildStyles({
          pathColor:
            percentage < 5 ? 'red' : percentage < 7 ? 'orange' : 'green',
          textColor: 'var(--color-text)',
        })}
      />
    </div>
  )
}
export default CircleProgressbar
