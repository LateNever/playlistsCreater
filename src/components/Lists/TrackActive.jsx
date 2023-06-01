import Button from '../UI/Button'
import styles from './TrackActive.module.css'

function TrackActive(props) {
  const { children, onClick, trackId } = props
  return (
    <div
      className={styles.trackContainer}
      data-trackid={trackId}
      onClick={onClick}
    >
      <div>
        <h3>{children}</h3>
        {/* <h3>{children}</h3> */}
      </div>
      <div className={styles.buttonsContainer}>
        <Button id="buttonUp">˄</Button>
        <Button id="buttonDown">˅</Button>
        <Button id="buttonReplace">Replace</Button>
      </div>
    </div>
  )
}

export default TrackActive
