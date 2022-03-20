import { HeroCard } from '../HeroCard'
import styles from './styles.module.scss'

export const HeroesList = () => {
  return (
    <section className="container">
      <article className={styles.heroesList}>

        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />

      </article>
    </section>
  )
}