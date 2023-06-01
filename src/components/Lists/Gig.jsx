import { uid } from 'react-uid'
import Button from '../UI/Button'
import Track from './Track'
import TrackActive from './TrackActive'
import styles from './Gig.module.css'

function Gig({ gig, toggleTrack, moveTrack }) {
  const onClickLog = () => {
    const gigList = gig.map((track) => track.songName)
    navigator.clipboard.writeText(gigList.join('\n'))
  }

  const clickOnTrack = (e) => {
    // console.log(e.currentTarget.dataset.trackid)
    // console.log(e.target.tagName)
    // console.log(e.target)
    // console.log(e.target.id)
    if (e.target.tagName === 'H3') {
      toggleTrack(e.currentTarget.dataset.trackid)
    }
    if (e.target.id === 'buttonUp') {
      moveTrack(e.currentTarget.dataset.trackid, -1)
    }
    if (e.target.id === 'buttonDown') {
      moveTrack(e.currentTarget.dataset.trackid, 1)
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
