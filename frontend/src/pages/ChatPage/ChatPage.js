import React from 'react'
import styles from "./ChatPage.module.css"
import Header from '../../components/Header'
const ChatPage = () => {
  return (
    <div className={styles.fadein}>
      <div>
        <Header/>
      </div>
    </div>
  )
}

export default ChatPage