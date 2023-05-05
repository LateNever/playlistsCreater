import styles from './Gig.module.css'

function Gig({ gig }) {
  return (
    <div className={styles.gigContainer}>
      {gig.map((track) => {
        return <h3 key={track.id}>{track.songName}</h3>
      })}
    </div>
  )
}

export default Gig
