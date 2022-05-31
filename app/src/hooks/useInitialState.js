import {useState } from 'react'

const stateModal = window.localStorage.getItem('initialModal')

const initialState = {
  closeInitialModal: stateModal
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const closeModal = () => {
    setState(true)
    window.localStorage.setItem('initialModal', true)
  }

  return { state, closeModal }

}

export default useInitialState