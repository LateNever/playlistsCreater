import { useState } from 'react'
import Button from '../UI/Button'
import styles from './ListForm.module.css'

function ListForm({ handleFilters }) {
  const [songsQuantity, setSongsQuantity] = useState('')
  const [barName, setBarName] = useState('harats')
  const [gigsQuantity, setGigsQuantity] = useState('')

  const onSubmitHandler = (ev) => {
    ev.preventDefault()
    handleFilters({
      songsQuantity: songsQuantity,
      barName: barName,
      gigsQuantity: gigsQuantity,
    })
  }

  return (
    <div className={styles.listFormContainer}>
      <h1>ListForm</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter quantity of songs"
          value={songsQuantity}
          onChange={(e) => setSongsQuantity(e.target.value)}
        ></input>
        <input
          placeholder="Enter BAR name"
          value={barName}
          onChange={(e) => setBarName(e.target.value)}
        ></input>
        <input
          placeholder="Enter quantity of Gigs"
          value={gigsQuantity}
          onChange={(e) => setGigsQuantity(e.target.value)}
        ></input>
        <Button type="submit" title="Submit">
          Generate
        </Button>
      </form>
    </div>
  )
}

export default ListForm
