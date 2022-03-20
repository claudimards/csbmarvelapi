import { Counter } from '../Counter'
import { Paginator } from '../Paginator'
import styles from './styles.module.scss'

export const BottomToolbar = () => {
  return (
    <section className="container">
      <article className={styles.bottomToolbar}>
        <Paginator />

        <Counter />
      </article>
    </section>
  )
}