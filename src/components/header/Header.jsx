import React from 'react'
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
        <article className={styles.header_logo}>
            <h1>.code</h1>
        </article>

        <nav className={styles.header_nav}>
            <a href="#home">Home</a>
            <a href="#home">About me</a>
            <a href="#home">My stack</a>
            <a href="#home">Expirence</a>
        </nav>

        <article className={styles.header_cont}>
            <a href="#contacts">CONTACT</a>
        </article>
    </header>
  )
}

export default Header