import Modal from '../../components/Modal/Modal'
import { useModal } from '../../hooks/useModal'

const Modals = () => {
  
  const [isOpen1, open1, close1] = useModal({
    value: true,
    initial: true
  })

  return (
    <div className="Modals">
      <Modal isOpen={isOpen1} closeModal={close1} >
        <div className="Modal__body">
          <h3>
            This page need your location for update the weater
          </h3>
        </div>
      </Modal>
    </div>
  )
}

export default Modals