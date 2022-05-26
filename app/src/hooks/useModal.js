import { useState } from 'react'

export const useModal = ({value, initial}) => {

  const closeInitial = window.localStorage.getItem('initialModal')
  
  const [isOpen, setIsOpoen] = useState(value)

  const openModal = () => setIsOpoen(true)
  
  const closeModal = () => {
    window.localStorage.setItem('initialModal', 'false')
    return setIsOpoen(false)
  }
  
  return [isOpen, openModal, closeModal]
}