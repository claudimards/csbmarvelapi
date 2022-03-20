import { GalleryItem } from "../GalleryItem"
import styles from "./styles.module.scss"

export const HeroGallery = () => {
  return (
    <section className="container">
      <article className={styles.heroGallery}>
        <h3>Gallery</h3>

        <div className={styles.gallery}>
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
      </article>
    </section>
  )
}