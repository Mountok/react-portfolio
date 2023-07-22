import React from "react";
import Header from "./components/header/Header";
import styles from './App.module.css'
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
