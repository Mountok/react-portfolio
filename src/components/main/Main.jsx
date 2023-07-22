import React from 'react'
import styles from './Main.module.css'
import Aboutme from './mainComponents/aboutme/Aboutme'
const Main = () => {
  return (
    <main className={styles.main}>
        <Aboutme />
    </main>
  )
}

export default Main