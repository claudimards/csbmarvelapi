import { HeroSkillsList } from "../HeroSkillsList";
import styles from "./styles.module.scss"

type HeroBioType = {
  comics?: {
    title: string;
    available: number;
    items: [{
      name: string;
    }]
  };
  events?: {
    title: string;
    available: number;
    items: [{
      name: string;
    }]
  };
  series?: {
    title: string;
    available: number;
    items: [{
      name: string;
    }]
  };
  stories?: {
    title: string;
    available: number;
    items: [{
      name: string;
    }]
  }
}

export const HeroBio = ({ comics, events, series, stories }: HeroBioType) => {
  return (
    <>
      <HeroSkillsList comics={comics} events={events} series={series} stories={stories} />

      <section className="container">
        <article className={styles.heroBiograph}>
          <aside className={styles.left}>
            <h2>Biography</h2>
          </aside>

          <article className={styles.content}>
            {!!comics?.items.length && (
              <div>
                <h4>Last {comics.title}</h4>
                <blockquote>
                  {comics.items.map(item => (
                    <p key={item.name}>{item.name}</p>
                  ))}
                </blockquote>
              </div>
            )}

            {!!events?.items.length && (
              <div>
                <h4>Last {events.title}</h4>
                <blockquote>
                  {events.items.map(item => (
                    <p key={item.name}>{item.name}</p>
                  ))}
                </blockquote>
              </div>
            )}

            {!!series?.items.length && (
              <div>
                <h4>Last {series.title}</h4>
                <blockquote>
                  {series.items.map(item => (
                    <p key={item.name}>{item.name}</p>
                  ))}
                </blockquote>
              </div>
            )}

            {!!stories?.items.length && (
              <div>
                <h4>Last {stories.title}</h4>
                <blockquote>
                  {stories.items.map(item => (
                    <p key={item.name}>{item.name}</p>
                  ))}
                </blockquote>
              </div>
            )}
          </article>
        </article>
      </section>
    </>
  )
}