import { Counter } from '../Counter'
import { Paginator } from '../Paginator'
import styles from './styles.module.scss'

type BottomToolbarType = {
  total: number;
  count: number;
  offset: number;
  limit: number;
  page: number;
  handleOffset: (offset: number) => void;
  onPageChange: (page: number) => void
}

export const BottomToolbar = ({ total, count, offset, limit, handleOffset, page, onPageChange }: BottomToolbarType) => {
  return (
    <section className="container">
      <article className={styles.bottomToolbar}>
        <Paginator
          currentPage={page}
          onPageChange={onPageChange}
          total={total}
          limit={limit}
          handleOffset={handleOffset}
        />

        <Counter total={total} count={offset + count} offset={offset} />
      </article>
    </section>
  )
}