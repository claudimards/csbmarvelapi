import { HeroSkill } from "../HeroSkill"
import styles from "./styles.module.scss"

type HeroSkillsListType = {
  comics?: {
    title: string;
    available: number;
  };
  events?: {
    title: string;
    available: number;
  };
  series?: {
    title: string;
    available: number;
  };
  stories?: {
    title: string;
    available: number;
  }
}

export const HeroSkillsList = ({ comics, events, series, stories }: HeroSkillsListType) => {
  return (
    <section className="container">
      <article className={`${styles.heroSkills} p1`}>
        {!!comics?.available && (
          <HeroSkill
            skillPower={comics?.available}
            skillName={comics?.title}
          />
        )}

        {!!events?.available && (
          <HeroSkill
            skillPower={events?.available}
            skillName={events?.title}
          />
        )}

        {!!series?.available && (
          <HeroSkill
            skillPower={series?.available}
            skillName={series?.title}
          />
        )}

        {!!stories?.available && (
          <HeroSkill
            skillPower={stories?.available}
            skillName={stories?.title}
          />
        )}
      </article>
    </section>
  )
}