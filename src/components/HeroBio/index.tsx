import { HeroInfoGroup } from "../HeroInfoGroup"

import styles from "./styles.module.scss"

export const HeroBio = () => {
  return (
    <section className="container">
      <article className={styles.heroBiograph}>
        <aside className={styles.left}>
          <h2>Biography</h2>
        </aside>

        <article className={styles.content}>
          <p>As Earth’s Sorcerer Supreme, Doctor Strange wields arcane spells and mystical artifacts to defend the planet against malevolent threats.</p>
          <h3>With These Hands</h3>
          <p>Recognized the world over as one of the most brilliant neurosurgeons, Stephen Strange’s arrogance and self-centered nature grew alongside his skill until his ego far outweighed his career, proceeding to close himself off from only the most wealthy and influential patients. Everything changed for the man one fateful night when a near-fatal car crash left Strange with severely damaged nerves in both hands and a diagnosis of never being able to operate again.</p>
          <p>Knowing his reliance on his medical abilities to support his affluent lifestyle, Strange began to seek a source of healing for his hands until the quest drained him of his resources and he faced a dark and uncertain future. Having crossed off all grounded cures from his list, he followed a path of rumor and legend to Tibet for a more esoteric shelter. There, high in the mountains, he met the Ancient One, a master mystic, and caught his first glimpse of a much larger universe.</p>
          <p>Strange embarked on a journey to learn the art of magic under the Ancient One’s tutelage when he realized that the art of medicine would remain closed off from him forever. The former medico excelled at his lessons and grew to be as adept at spells and sorcery as he once was at surgery. The Ancient One saw in Strange a most gifted pupil and after years of schooling him, presented him with powerful artifacts with which to protect the Earth from many and varied menaces.</p>
          <p>Returning to the West, Strange set up a new practice in New York City, and settled into his destined role as a sage, an occult advisor, and a Master of the Mystic Arts.</p>
        </article>

        <aside className={styles.right}>
          <HeroInfoGroup />
        </aside>
      </article>
    </section>
  )
}