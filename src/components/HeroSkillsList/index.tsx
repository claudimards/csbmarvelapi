import { HeroSkill } from "../HeroSkill"
import styles from "./styles.module.scss"

export const HeroSkillsList = () => {
  return (
    <section className="container">
      <article className={`${styles.heroSkills} p1`}>
        <HeroSkill skillPower={3} skillName="DURABILITY" />
        <HeroSkill skillPower={6} skillName="ENERGY" />
        <HeroSkill skillPower={3} skillName="FIGHTING SKILLS" />
        <HeroSkill skillPower={4} skillName="INTELLIGENCE" />
        <HeroSkill skillPower={7} skillName="SPEED" />
        <HeroSkill skillPower={2} skillName="STRENGTH" />
      </article>
    </section>
  )
}