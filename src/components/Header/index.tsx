import Link from 'next/link';
import { useContext } from 'react';
import { IoShieldHalfOutline } from 'react-icons/io5';
import { RiShieldStarLine } from 'react-icons/ri';

import { CharContext } from '../../contexts/CharContext';
import { HeroSearchForm } from '../HeroSearchForm';

import styles from './styles.module.scss'

export const Header = () => {
  const { favCount } = useContext(CharContext)

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

          <div className={styles.actions}>
            <Link href="/favorites">
              <a title="Favorites">
                {!!favCount && <span className="favCount">{favCount}</span>}
                <RiShieldStarLine />
              </a>
            </Link>

            <HeroSearchForm />
          </div>
        </article>
      </section>
    </header>
  )
}