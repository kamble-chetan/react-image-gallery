import axios from "axios";
import { useState, useEffect } from "react";
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchImages = async () => {
      let response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_UNSPLASH_KEY}&page=${page}&perPage=12`,
      );
      setPhotos(response.data);
    };
    fetchImages();
  }, [page]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Image Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-lg overflow-hidden shadow"
          >
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              className="w-full h-48 object-cover"
            />
            <p className="text-sm text-gray-600 p-2">{photo.user.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center gap-10">
        <button
          className="bg-amber-600 text-black rounded px-5 py-1 "
          disabled={page === 1}
          onClick={() => {
            console.log("Prev Clicked");
            
            setPage(page - 1);
          }}
        >
          Prev
        </button>

        <span>Page{page}</span>
        <button
          className="bg-amber-600 text-black rounded px-5 py-1"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
