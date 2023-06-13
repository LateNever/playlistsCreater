import { uid } from 'react-uid'
import Gig from './Gig'
import styles from './Playlist.module.css'

function Playlist({ gigs, toggleTrack, moveTrack, replaceTrack }) {
  return (
    <div className={styles.playlistContainer}>
      {gigs.map((gig) => {
        return (
          <Gig
            key={uid(gig)}
            gig={gig}
            toggleTrack={toggleTrack}
            moveTrack={moveTrack}
            replaceTrack={replaceTrack}
          />
        )
      })}
    </div>
  )
}

export default Playlist
