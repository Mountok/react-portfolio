import React from 'react'
import styles from './Main.module.css'
import Aboutme from './mainComponents/aboutme/Aboutme'
import Mystack from './mainComponents/mystack/Mystack'
import MyExp from './mainComponents/myExpirence/MyExp'
import MySkills from './mainComponents/mySkills/MySkills';

const Main = () => {
  return (
    <main className={styles.main}>
        <Aboutme />
        <Mystack />
        <MyExp />
        <MySkills />
    </main>
  )
}

export default Main