import React, { useState } from 'react'

const Context = React.createContext()

export const SeachCityProvider = ({children}) => {
  const [search, setSearch] = useState({city: 'Guatemala'})

  return (
      <Context.Provider value={{search, setSearch}}>
          {children}
      </Context.Provider>
  )
}

export default Context