import Image from "next/image"

import styles from "./styles.module.scss"

export const HeroBanner = () => {
  return (
    <section className={styles.heroBanner}>
      <figure>
        <Image
          src="/assets/images/drstrangebanner.jpg"
          width="1920"
          height="540"
          alt="Doctor Strange"
        />
      </figure>

      <article className={styles.heroBio}>
        <h3>Stephen Strange</h3>
        <h1 className={styles.heroName}>Doctor Strange</h1>
        <p>Formerly a renowned surgeon, Doctor Stephen Strange now serves as the Sorcerer Supreme—Earth’s foremost protector against magical and mystical threats.</p>
      </article>
    </section>
  )
}