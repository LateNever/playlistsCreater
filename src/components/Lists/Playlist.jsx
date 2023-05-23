import { uid } from 'react-uid'
import Gig from './Gig'
import styles from './Playlist.module.css'

function Playlist({ gigs, onClick }) {
  return (
    <div className={styles.playlistContainer}>
      {gigs.map((gig) => {
        return <Gig key={uid(gig)} gig={gig} onClick={onClick} />
      })}
    </div>
  )
}

export default Playlist
