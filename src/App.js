import { useEffect, useState } from 'react';
import './App.css';
import Products from './Products/Products';
import SearchProducts from './Products/SearchProducts';

function App() {

  const [paintings, setPaintings] = useState([]);
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/kibria-khandaker/my-api-data/main/fakeData.json')
      .then(res => res.json())
      .then(data => {
        setPaintings(data)
        // setSearchResults(data)
      })
  }, []);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    if (searchText === ''  ) {
      setSearchResults([])
      return;
    }
    if (!searchText.trim() ) {
      return;
    }
    console.log(searchText);
    const match = paintings.filter(paint => paint.name.toLowerCase().includes(searchText.toLowerCase()));
    setSearchResults(match);
  }

  return (
    <div className='main-search-div'>
      <div className='productCard_container'>
        {
          paintings.map((painting) => (
            <Products
              key={painting.id}
              paintingData={painting}
            />
          ))
        }
      </div>
      <div className='position_sticky'>
        <div className='search-area'>
          <h2>Search painting from {paintings.length} items</h2>
          <input
            onChange={handleSearchChange}
            type="text"
            style={{ border: '5px solid #aad5e8', padding: '10px 10px', margin: '20px', borderRadius: '7px', width: '80%', fontSize: '20px' }}
            placeholder='Search' />
        </div>
        <div className='search-result-area'>
          {
            searchResults.map((painting) => (
              <SearchProducts
                key={painting.id}
                paintingData={painting}
              />
            )).slice(0, 3)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
