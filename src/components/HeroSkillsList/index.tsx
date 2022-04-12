import { HeroSkill } from "../HeroSkill"
import styles from "./styles.module.scss"

type HeroSkillsItemType = {
  title: string;
  collectionURI: string;
  available: number;
}

type HeroSkillsListType = {
  bioResume: [HeroSkillsItemType];
}

export const HeroSkillsList = ({ bioResume }: HeroSkillsListType) => {
  
  return (
    <section className="container">
      <article className={`${styles.heroSkills} p1`}>

        {!!bioResume.length && (
          <>
          {bioResume.map((bio: HeroSkillsItemType) => (
            <>
            {!!bio.available && (
              <HeroSkill
                key={bio.collectionURI}
                skillPower={bio.available}
                skillName={bio.title}
              />
            )}
            </>
          ))}
          </>
        )}

      </article>
    </section>
  )
}