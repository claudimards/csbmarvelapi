import { IoArrowRedoOutline } from 'react-icons/io5'

import styles from './styles.module.scss'

export const HeroSearchForm = () => {
  return (
    <form className={styles.searchBox}>
      <input type="text" placeholder='Search hero...' />
      <button type="submit">
        <IoArrowRedoOutline />
      </button>
    </form>
  )
}