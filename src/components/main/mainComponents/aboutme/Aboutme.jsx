import React from 'react'
import styles from './Aboutme.module.css'
import logogh from './../../../../assets/logo/github.svg'
import logotg from './../../../../assets/logo/telegram.svg'
const Aboutme = () => {
  return (
    <section className={styles.aboutme_page}>
      <div className={styles.aboutme_page_title}>
        <p><span>HELLO WOLRD</span><br/>I`M  ISLAM</p>
      </div>
      <div className={styles.aboutme_page_subtitle}>
        <p>WEB DEVELOPER</p>
      </div>
      <div className={styles.aboutme_page_subtitle}>
        <a href="https://github.com/Mountok">
          <img src={logogh} alt="" />
        </a>
        {/* <a href="#">
          <img src={logotg} alt="" />
        </a> */}
      </div>
    </section>
  )
}

export default Aboutme