import axios from 'axios'
import { useState,useEffect } from 'react'
const App = () => {
      const [photos, setPhotos] = useState([]);
      useEffect(() => {
        fetchImages();
      }, []);

  const fetchImages = async () => {
    let response = await axios.get(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
    setPhotos(response.data)
  }
  return (
   <div className='p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-2xl font-bold text-center mb-6'>Image Gallery</h1>

      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        {photos.map((photo) => (
          <div key={photo.id} className='bg-white rounded-lg overflow-hidden shadow'>
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              className='w-full h-48 object-cover'
            />
            <p className='text-sm text-gray-600 p-2'>{photo.user.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App