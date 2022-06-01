import { useState, useContext } from 'react'
import './Modal.css'
import AppContext from '../../context/App.context'
import ModalContent from '../../components/ModalContent/ModalContent'
import { useModal } from '../../hooks/useModal'

const Modal = () => {
  const [initialOpen, openInitial, closeinitial] = useModal(true)
  const { closeModal } = useContext(AppContext)
  
  if (!initialOpen) {
    closeModal()
  }

  return (
  <div>
      <ModalContent isOpen={initialOpen} close={closeinitial} >
        <h4>Hola Bienvenido a KodeWeather</h4>
        <p>Esta aplicacion solicita permiso para usar tu ubucacion, y poder entregar el estado del tiempo basandose en tu ubicacion</p>
      </ModalContent>
  </div> 
  )
}

export default Modal