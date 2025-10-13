import React, { createContext, useContext, useState, useEffect } from "react"

interface LoadingContextType {
  isLoading: boolean
  setLoading: (loading: boolean) => void
  isInitialLoad: boolean
  setInitialLoad: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // Simulate initial app load time
    const timer = setTimeout(() => {
      setIsInitialLoad(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const setLoading = (loading: boolean) => {
    setIsLoading(loading)
  }

  const setInitialLoad = (loading: boolean) => {
    setIsInitialLoad(loading)
  }

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
        isInitialLoad,
        setInitialLoad,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}
