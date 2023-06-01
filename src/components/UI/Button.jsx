import styles from './Button.module.css'

function Button(props) {
  const { children, onClick, id } = props
  return (
    <button id={id} className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
