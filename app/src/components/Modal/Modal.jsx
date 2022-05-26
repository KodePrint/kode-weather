import './Modal.css'

const Modal = ({title, isOpen, closeModal, children}) => {
  
  console.log(isOpen)

  return (
    <article className={`Modal ${isOpen && 'is-open'}`}>
      <div className="Modal__container">
        <div className="Modal__title">
          <h3>{title}</h3>
          <button 
            className="Modal__close-btn"
            onClick={closeModal}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        {children}
      </div>
    </article>
  )
}

export default Modal