import styles from "./Display.module.css";

const Display = ({DisplayValue}) => {

  return <input className={styles.display} types="text" value={DisplayValue} readOnly/>

};

export default Display;