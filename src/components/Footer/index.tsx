import Link from "next/link"

import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        Developed by <Link href="/"><a>Claudimar Bezerra</a></Link>
      </div>
    </footer>
  )
}