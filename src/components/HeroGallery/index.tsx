import { GalleryItem } from "../GalleryItem"
import styles from "./styles.module.scss"

interface EventProps {
  id: number;
  title: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

type EventsType = {
  events?: EventProps[]
}

export const HeroGallery = ({ events }: EventsType) => {
  return (
    <section className="container">
      <article className={styles.heroGallery}>
        <h3>Events Gallery</h3>

        <div className={styles.gallery}>
          {events?.map(event => (
            <GalleryItem
              key={event.id}
              title={event.title}
              thumbnail={event.thumbnail}
            />
          ))}
        </div>
      </article>
    </section>
  )
}