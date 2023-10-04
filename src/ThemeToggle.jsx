import { useGlobalContext } from './Context'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()

  return (
    <section className='toggle-container'>
      <button onClick={toggleDarkTheme} className='dark-toggle'>
        {isDarkTheme ? (
          <BsFillSunFill className='toggle-icon'></BsFillSunFill>
        ) : (
          <BsFillMoonFill className='toggle-icon'></BsFillMoonFill>
        )}
      </button>
    </section>
  )
}
export default ThemeToggle
