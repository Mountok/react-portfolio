import React from 'react'
import styles from './Aboutme.module.css'

const Aboutme = () => {
  return (
    <section className={styles.aboutme_page}>
      <div className={styles.aboutme_page_title}>
        <p><span>HELLO WOLRD</span><br/>I`M  ISLAM</p>
      </div>
      <div className={styles.aboutme_page_subtitle}>
        <p>WEB DEVELOPER</p>
      </div>
    </section>
  )
}

export default Aboutme