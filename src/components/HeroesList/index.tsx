import { HeroCard } from '../HeroCard'
import styles from './styles.module.scss'

type Hero = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

type HeroListTypes = {
  heroes: Hero[];
}

export const HeroesList = ({ heroes }: HeroListTypes) => {

  return (
    <section className="container">
      <article className={styles.heroesList}>

        {heroes.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))}

      </article>
    </section>
  )
}