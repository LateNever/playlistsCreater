import Gig from './Gig'
import styles from './Playlist.module.css'

function Playlist({ gigs }) {
  return (
    <div className={styles.playlistContainer}>
      {gigs.map((gig) => {
        return <Gig key={gig[0].id} gig={gig} />
      })}
    </div>
  )
}

export default Playlist
