const ModalContent = ({children, isOpen, close}) => {

  return (
    <div className={`Modal ${isOpen && 'isOpen'}`}>
      <article className="ModalContent">
        <div className="ModalContent__header">
          <h3 className="ModalConent__header__title">
          </h3>
          <span
            onClick={close}
          >
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="ModalContent__body">
          {children}
        </div>
      </article>
    </div>
  )
}

export default ModalContent