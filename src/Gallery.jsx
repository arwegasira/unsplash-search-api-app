import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './Context'
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios(`${url}&query=${searchTerm}`)
      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading....</h4>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There was an error....</h4>
      </section>
    )
  }
  const images = response.data.results

  return (
    <section className='image-container'>
      {images.map((item) => {
        const url = item?.urls?.raw
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className='img'
          />
        )
      })}
    </section>
  )
}
export default Gallery
