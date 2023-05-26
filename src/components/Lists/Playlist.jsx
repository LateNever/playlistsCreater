import { uid } from 'react-uid'
import Gig from './Gig'
import styles from './Playlist.module.css'

function Playlist({ gigs }) {
  return (
    <div className={styles.playlistContainer}>
      {gigs.map((gig) => {
        return <Gig key={uid(gig)} gig={gig} />
      })}
    </div>
  )
}

export default Playlist
