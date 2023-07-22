import React from 'react'
import styles from './Main.module.css'
import Aboutme from './mainComponents/aboutme/Aboutme'
import Mystack from './mainComponents/mystack/Mystack'
const Main = () => {
  return (
    <main className={styles.main}>
        <Aboutme />
        <Mystack />
    </main>
  )
}

export default Main