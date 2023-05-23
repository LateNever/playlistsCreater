import styles from './Button.module.css'

function Button(props) {
  const { children, onClick } = props
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
