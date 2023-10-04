import { createContext, useContext, useState, useEffect } from 'react'
const globalContext = createContext()
export const useGlobalContext = () => useContext(globalContext)
const getInitialDarkModeState = () => {
  const initialDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  const localStorageDarkMode = localStorage.getItem('darkMode') === 'true'
  return initialDarkMode || localStorageDarkMode
}

const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkModeState())
  const [searchTerm, setSearchTerm] = useState('')

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])
  return (
    <globalContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </globalContext.Provider>
  )
}
export default AppContext
