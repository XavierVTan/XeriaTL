import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Xen here!</b> Discover my visual novel reviews and thoughts.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR </h1>
          <p className={styles.postDescription}>DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR DOLOR </p>
          <button className={styles.postButton}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured