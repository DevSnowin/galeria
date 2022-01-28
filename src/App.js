import Header from './components/layouts/header';
import ImageContainer from './components/layouts/imageContainer'

import axios from 'axios';
import { useEffect, useState } from 'react';
import SplashScreen from './components/layouts/splashScreen';
import Caption from './components/general/caption';
import Error from './components/layouts/error';
import LoadButton from './components/general/loadButton';


function App() {
  
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expired, setExpired] = useState(false);

  const apiRoot = "https://api.unsplash.com";
  const clientId = expired ? process.env.REACT_APP_CLIENT_ID_1 : process.env.REACT_APP_CLIENT_ID_2;
  const apiUrl = `${apiRoot}/photos/random?client_id=${clientId}&count=10`;
  
  async function getImages(){
    try{
      const data = await axios.get(apiUrl)
      .then(res => (res.data)).catch(e => {
        setExpired(true);
        setError(true);
        getImages();
      });
      
      if (data) {
        const result = [...images, ...data];
        const ids = result.map(o => o.id);
        const filtered = result.filter(({id}, index) => !ids.includes(id, index + 1));
        setImages(filtered);
      }

    }
    catch(e) {
      setError(true);
    }
  }
  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    getImages();
  }, []);
 
  return (
    <div>
      {isLoading && <SplashScreen />}
      <Header />
      <Caption />
      {
        error ? 
        <Error />
        :
        <>
          <ImageContainer images={images}/>
          <LoadButton loadMore={getImages} />
        </>
        }
    </div>
  );
}

export default App;
