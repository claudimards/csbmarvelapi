import Link from "next/link"

import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        Developed by <Link href="https://wa.me/5519981828929"><a target="_blank">Claudimar Bezerra</a></Link>
      </div>
    </footer>
  )
}