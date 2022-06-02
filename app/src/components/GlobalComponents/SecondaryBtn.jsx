const SecondaryBtn = ({customClass, children, handleClick}) => {
  return (
    <button onClick={handleClick} className={`btn-secondary ${customClass}`}>
      {children}
    </button> 
  )
}

export default SecondaryBtn