import { HeroSkillsList } from "../HeroSkillsList";
import styles from "./styles.module.scss"

type BioItem = {
  title: string;
  available: number;
  collectionURI: string;
  items: [{
    name: string;
  }]
}

type HeroBioType = {
  bioResume: [BioItem];
}

export const HeroBio = ({ bioResume }: HeroBioType) => {
  
  return (
    <>
      <HeroSkillsList bioResume={bioResume} />

      <section className="container">
        <article className={styles.heroBiograph}>
          <aside className={styles.left}>
            <h2>Biography</h2>
          </aside>

          {!!bioResume.length && (
            <section className={styles.content}>
            {bioResume.map((bio: BioItem, index: number) => (
              <>
              {!!bio.available && (
                <div key={`${bio.title}-${index}`}>
                  <h4>Last {bio.title}</h4>
                  <blockquote>
                    {bio.items.map((item, index) => (
                      <p key={`${item.name}-${index}`}>{item.name}</p>
                    ))}
                  </blockquote>
                </div>
              )}
              </>
            ))}
            </section>
          )}

        </article>
      </section>
    </>
  )
}