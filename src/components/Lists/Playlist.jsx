import styles from './Playlist.module.css'

function Playlist({ tracks }) {
  return (
    <div className={styles.playlistContainer}>
      {tracks.map((track) => {
        return <h3 key={track.id}>{track.songName}</h3>
      })}
    </div>
  )
}

export default Playlist
