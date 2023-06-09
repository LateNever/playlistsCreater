import { useState } from 'react'
import Button from '../UI/Button'
import styles from './ListForm.module.css'

function ListForm({ handleFilters }) {
  const [songsQuantity, setSongsQuantity] = useState('3')
  const [barName, setBarName] = useState('bullwar')
  const [gigsQuantity, setGigsQuantity] = useState('3')

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
        <select value={barName} onChange={(e) => setBarName(e.target.value)}>
          <option value="bullwar">bullwar</option>
          <option value="zarnizza">zarnizza</option>
          <option value="harats">harats</option>
        </select>
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
