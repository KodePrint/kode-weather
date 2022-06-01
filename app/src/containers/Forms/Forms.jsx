const Forms = ({children, className, innerRef}) => {
  return (
    <form ref={innerRef} className={`form ${className}`}>
      {children}
    </form>
  )
}

export default Forms