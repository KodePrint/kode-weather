const Modal = ({children}) => {

  return (
    <article className="Modal is-open">
      <div className="Modal__container">
        <button className="close">
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
      {children}
    </article>
  )
}

export default Modal