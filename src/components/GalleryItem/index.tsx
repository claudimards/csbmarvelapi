import Image from "next/image"
import Link from "next/link";

import styles from "./styles.module.scss"

type GalleryItem = {
  title: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

export const GalleryItem = ({ title, thumbnail }: GalleryItem) => {
  return (
    <Link href={`${thumbnail.path}.${thumbnail.extension}`}>
      <a className={styles.galleryItem} target="_blank">
        <figure>
          <Image
            src={`${thumbnail.path}/landscape_incredible.${thumbnail.extension}`}
            width="540"
            height="285"
            alt={title}
          />
        </figure>

        <article>
          {title}
        </article>
      </a>
    </Link>
  )
}