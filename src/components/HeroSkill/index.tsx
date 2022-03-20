import styles from "./styles.module.scss"

type HeroSkillProps = {
  skillPower: number;
  skillName: string;
}

export const HeroSkill = ({ skillPower, skillName }: HeroSkillProps) => {
  return (
    <div className={styles.heroSkill}>
      <div className={styles.skillPower}>
        <div className="skillBar"></div>
        <span>{skillPower}</span>
      </div>

      <div className="skillName">
        <h3>{skillName}</h3>
      </div>
    </div>
  )
}