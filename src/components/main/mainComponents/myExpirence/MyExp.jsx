import React from 'react'
import styles from './MyExp.module.css'

const MyExp = () => {
  return (
    <section className={styles.myExp_page}>
        <header className={styles.header}>
            <p>My Expireince</p>
        </header>
        <main className={styles.main}>
            <div className={styles.main_item}>
                <p className={styles.main_item_header}>2021, Summer </p>
                <p className={styles.main_item_text}>Starting learn HTML & basic CSS</p>
            </div>
            <div className={styles.main_item}>
                <p className={styles.main_item_header}>2022, Winter </p>
                <p className={styles.main_item_text}>Taught basic JavaScript</p>
            </div>
            <div className={styles.main_item}>
                <p className={styles.main_item_header}>2022, Spring </p>
                <p className={styles.main_item_text}>Improved skills in HTML CSS and JavaScript</p>
            </div>
            <div className={styles.main_item}>
                <p className={styles.main_item_header}>2022, Summer </p>
                <p className={styles.main_item_text}>Starting learn Node.js & Express</p>
            </div>
            <div className={styles.main_item}>
                <p className={styles.main_item_header}>2023, Winter </p>
                <p className={styles.main_item_text}>Learning to create my first web application using previously learned</p>
            </div>
            <div className={styles.main_item}>
                <p className={styles.main_item_header}>2023, Summer (Nowadays) </p>
                <p className={styles.main_item_text}>Taught basic React.js & Socket.io</p>
            </div>
            <div className={styles.main_item}>
                <p className={styles.main_item_header}>Nowadays </p>
                <p className={styles.main_item_text}>Сontinue my education</p>
            </div>
        </main>
    </section>
    )
}

export default MyExp