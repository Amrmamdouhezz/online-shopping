import React, { createContext, useState } from 'react'

const ErrorContext = createContext()
const ErrorContextProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("")
  return (
    <ErrorContext.Provider value={{ errorMessage, setErrorMessage }}>
      {children}
    </ErrorContext.Provider>
  )
}

export { ErrorContextProvider, ErrorContext } 