import styles from './ListForm.module.css'

function ListForm() {
  return (
    <div className={styles.listFormContainer}>
      <h1>ListForm</h1>
      <form>
        <input placeholder="Enter quantity of songs"></input>
        <input placeholder="Enter BAR name"></input>
        <input placeholder="Enter ready to dance"></input>
      </form>
    </div>
  )
}

export default ListForm
