import Link from 'next/link';
import { IoArrowRedoOutline, IoShieldHalfOutline } from 'react-icons/io5';
import { HeroSearchForm } from '../HeroSearchForm';

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className="container">
        <article className={styles.headerContainer}>
          <h1>
            <Link href="/">
              <a>
                <span>Marvel</span>
                <mark><IoShieldHalfOutline />Heroes</mark>
              </a>
            </Link>
          </h1>

          <HeroSearchForm />
        </article>
      </section>
    </header>
  )
}