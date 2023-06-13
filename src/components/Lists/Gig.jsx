import { useEffect, useRef } from 'react'
import { uid } from 'react-uid'
import Button from '../UI/Button'
import Track from './Track'
import TrackActive from './TrackActive'
import styles from './Gig.module.css'

function Gig({ gig, toggleTrack, moveTrack, replaceTrack }) {
  const onClickLog = () => {
    const gigList = gig.map((track) => track.songName)
    navigator.clipboard.writeText(gigList.join('\n'))
  }

  // const refGig = useRef(null)

  const clickOnTrack = (e) => {
    if (e.target.tagName !== 'button') {
      toggleTrack(e.currentTarget.dataset.trackid)
    }
    if (e.target.id === 'buttonUp') {
      moveTrack(e.currentTarget.dataset.trackid, -1)
    }
    if (e.target.id === 'buttonDown') {
      moveTrack(e.currentTarget.dataset.trackid, 1)
    }
    if (e.target.id === 'buttonReplace') {
      replaceTrack(e.currentTarget.dataset.trackid)
    }
  }

  return (
    <div className={styles.gigContainer}>
      <div className={styles.gigList}>
        {gig.map((track) => {
          return track.isActive === false ? (
            <Track key={uid(track)} onClick={clickOnTrack} trackId={track.id}>
              {track.songName}
            </Track>
          ) : (
            <TrackActive
              key={uid(track)}
              onClick={clickOnTrack}
              trackId={track.id}
            >
              {track.songName}
            </TrackActive>
          )
        })}
      </div>
      <Button onClick={onClickLog}>Copy</Button>
    </div>
  )
}

export default Gig
