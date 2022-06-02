const PrimaryBtn = ({customClass, children, handleClick}) => {
  return (
    <button onClick={handleClick} className={`btn-primary ${customClass}`}>
      {children}
    </button> 
  )
}

export default PrimaryBtn