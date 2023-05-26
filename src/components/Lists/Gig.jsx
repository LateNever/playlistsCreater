import { uid } from 'react-uid'
import Button from '../UI/Button'
import Track from './Track'
import styles from './Gig.module.css'

function Gig({ gig }) {
  const onClickLog = () => {
    const gigList = gig.map((track) => track.songName)
    navigator.clipboard.writeText(gigList.join('\n'))
  }

  return (
    <div className={styles.gigContainer}>
      <div className={styles.gigList}>
        {gig.map((track) => {
          // return <h3 key={uid(track)}>{track.songName}</h3>
          return <Track key={uid(track)}>{track.songName}</Track>
        })}
      </div>
      <Button onClick={onClickLog}>Copy</Button>
    </div>
  )
}

export default Gig
