import Gig from './Gig'
import styles from './Playlist.module.css'

function Playlist({ gigs }) {
  return (
    <div className={styles.playlistContainer}>
      {gigs.map((gig) => {
        return <Gig gig={gig} />
      })}
    </div>
  )
}

export default Playlist
