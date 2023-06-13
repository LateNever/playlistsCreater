import { useEffect, useRef } from 'react'
import Button from '../UI/Button'
import styles from './TrackActive.module.css'

function TrackActive(props) {
  const { children, onClick, trackId } = props

  const refTrack = useRef()

  useEffect(() => {
    const outsideClick = (e) => {
      console.log(e.target)
      console.log(refTrack.current)
      if (refTrack.current.contains(e.target)) {
      }
    }
    document.addEventListener('click', outsideClick)

    return () => {
      document.removeEventListener('click', outsideClick)
    }
  }, [])

  return (
    <div
      id="trackContainer"
      className={styles.trackContainer}
      data-trackid={trackId}
      onClick={onClick}
      ref={refTrack}
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
