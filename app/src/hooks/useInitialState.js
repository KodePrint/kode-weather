import {useState } from 'react'

const stateModal = window.localStorage.getItem('initialModal')

const initialState = {
  closeInitialModal: stateModal,
  userLogin: {}
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const closeModal = () => {
    setState({
      ...state,
      closeInitialModal: true
    })
    window.localStorage.setItem('initialModal', true)
  }

  const setUserLogin = (user) => {
    setState({
      ...state,
      userLogin: user
    })
  }

  return { state, setUserLogin, closeModal }

}

export default useInitialState