import { useGlobalContext } from './Context'

const SearchFrom = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input search-input'
        />
        <button type='submit'>Search</button>
      </form>
    </section>
  )
}
export default SearchFrom
