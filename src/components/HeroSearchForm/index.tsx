import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react'
import { IoArrowRedoOutline } from 'react-icons/io5'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.scss'

export const HeroSearchForm = () => {
  const [inputCharName, setInputCharName] = useState('')
  const router = useRouter();

  const handleCharSearch = async ( event: FormEvent ) => {
    event.preventDefault()

    if (inputCharName === '') {
      toast.error("Please type a valid name !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return
    }

    router.push(`/search?char=${inputCharName}`)
  }

  return (
    <>
      <ToastContainer />

      <form
        onSubmit={handleCharSearch}
        className={styles.searchBox}
      >
        <input
          type="text"
          placeholder='Search hero...'
          onChange={(event) => setInputCharName(event.target.value.trim())}
        />

        <button type="submit">
          <IoArrowRedoOutline />
        </button>
      </form>
    </>
  )
}