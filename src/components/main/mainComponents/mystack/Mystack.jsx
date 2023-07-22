import React from 'react'
import styles from './Mystack.module.css'

const Mystack = () => {
  return (
    <section className={styles.mystack_page}>
        <header className={styles.mystack_page_header}>
            <p>My Services</p>

        </header>
        <main className={styles.mystack_page_main}>
          <div className={styles.mystack_page_main_item}>
            <header className={styles.mystack_page_main_item_header}>

            </header>
            <content style={styles.mystack_page_main_item_content}>
              <p>Web Dev</p>
              <p>Development of multi-page and single-page web applications or websites. 
                Excellent quality and best practices.</p>
            </content>
          </div>
          <div className={styles.mystack_page_main_item}>
            <header className={styles.mystack_page_main_item_header}>

            </header>
            <content style={styles.mystack_page_main_item_content}>
              <p>Desktop Dev</p>
              <p>Development of simple applications for: Windows, Mac OS, Linux.
Using Electron.js technology.</p>
            </content>
          </div>
          <div className={styles.mystack_page_main_item}>
            <header className={styles.mystack_page_main_item_header}>

            </header>
            <content style={styles.mystack_page_main_item_content}>
              <p>Mobile Dev</p>
              <p>Also coming soon is mobile development using React Native...</p>
            </content>
          </div>
        </main>
    </section>
  )
}

export default Mystack