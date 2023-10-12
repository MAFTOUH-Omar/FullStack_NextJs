'use client'
import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext();


const AuthProvider  = ({ children }) => {
  const [x , setX] = useState("x")
  return (
    <AuthContext.Provider value={x}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };