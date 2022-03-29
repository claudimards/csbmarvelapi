import Image from "next/image"

import styles from "./styles.module.scss"

type HeroBannerType = {
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

export const HeroBanner = ({ name, thumbnail, description }: HeroBannerType) => {
  return (
    <section className={styles.heroBanner}>
      <figure>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          width="1920"
          height="540"
          alt={name}
        />
      </figure>

      <article className={styles.heroBio}>
        <h1 className={styles.heroName}>{name}</h1>
        {description && (
          <p>{description}</p>
        )}
      </article>
    </section>
  )
}