import React from 'react'
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
        <article className={styles.header_logo}>
            <h1>coder</h1>
        </article>

        
        <article className={styles.header_cont}>
            <a href="#contacts">CONTACT</a>
        </article>
    </header>
  )
}

export default Header