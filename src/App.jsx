import axios from "axios";
import { useState, useEffect } from "react";
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const [search, setSearch] = useState("");
  const [SearchResults, setSearchResults] = useState(null);
  const [Issearching, setIssearching] = useState(false);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        let response;
        if (Issearching && search.trim() !== "") {
          response = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
              client_id: import.meta.env.VITE_UNSPLASH_KEY,
              query: search,
              page: page,
              per_page: 15,
            },
          });
          setSearchResults(response.data.results);
          setPhotos([]); // Clear the photos state when searching
        } else {
          response = await axios.get("https://api.unsplash.com/photos", {
            params: {
              client_id: import.meta.env.VITE_UNSPLASH_KEY,
              page: page,
              per_page: 15,
            },
          });
          setPhotos(response.data);
          setSearchResults(null);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, [page, Issearching, search]);

  const handleSearch = () => {
    if (search.trim() === "") {
      setIssearching(false);
      setSearchResults(null);
      setPage(1);
    } else {
      setIssearching(true);
      setPage(1);
    }
  };

  const handleClearResults = () => {
    setSearchResults(null);
    setSearch("");
    setIssearching(false);
    setPage(1);
  };

  const DisplayPhotos = SearchResults || photos;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Image Gallery</h1>
      <div className="w-full flex justify-center items-center mb-10">
        <div className="flex items-center w-full max-w-xl bg-white rounded-full shadow-md overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-amber-500">
          <button
            className="px-4 py-3 text-gray-500 hover:text-red-500 cursor-pointer"
            onClick={handleClearResults}
          >
            ✕
          </button>

          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search photos..."
            className="flex-1 py-3 px-2 outline-none text-gray-800 placeholder-gray-400"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            value={search}
          />

          <button
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 cursor-pointer active:scale-95"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {DisplayPhotos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-lg overflow-hidden shadow"
          >
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              onClick={() => {
                setSelected(photo);
                console.log("Selected Photo:", photo);
              }}
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

      {selected && (
        <div
          onClick={() => {
            setSelected(null);
          }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            className="bg-white rounded-lg p-3 max-w-md"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <img
              src={selected.urls.regular}
              alt={selected.alt_description || "Selected photograph"}
              className="w-full rounded"
            />
            <p className="font-bold text-black mt-2">{selected.user.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
