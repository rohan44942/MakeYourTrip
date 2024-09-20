import styles from "./Button.module.css";
<<<<<<< HEAD

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
=======
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn}  ${styles[type]}`}>
      {children}
      
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
    </button>
  );
}

export default Button;
