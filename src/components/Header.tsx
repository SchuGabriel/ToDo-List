import styles from './header.module.css'

import logo from "../img/rocket.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <img src={logo} alt="brand" />
        <p className={styles.brandName}>
          to<span>do</span>
        </p>
      </div>
    </div>
  );
}
