import { HeroInfo } from "../HeroInfo"
import styles from "./styles.module.scss"

export const HeroInfoGroup = () => {
  return (
    <article className={styles.heroInfos}>
      <HeroInfo />
      <HeroInfo />
      <HeroInfo />
    </article>
  )
}