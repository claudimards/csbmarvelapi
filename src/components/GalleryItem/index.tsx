import Image from "next/image"

import styles from "./styles.module.scss"

export const GalleryItem = () => {
  return (
    <div className={styles.galleryItem}>
      <figure>
        <Image
          src="/assets/images/gallery01.jpg"
          width="540"
          height="285"
        />
      </figure>

      <article>
        infos
      </article>
    </div>
  )
}