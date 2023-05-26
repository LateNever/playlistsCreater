import Button from '../UI/Button'
import styles from './Track.module.css'

function Track(props) {
  const { children } = props
  return (
    <div className={styles.trackContainer}>
      <div>
        <h3>{children}</h3>
        {/* <h3>Hello from Track</h3> */}
      </div>
      <div className={styles.buttons}>
        <Button>˄</Button>
        <Button>˅</Button>
      </div>
    </div>
  )
}

export default Track
