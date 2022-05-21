import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map';

function App() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [mapsInfo, setMapsInfo] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyCB5IaGlFXJePh5hXYCu6HhqBUWgnkcKzo`)
          .then(res => res.json())
          .then(data => console.log(data))
      });
    }
  },[])

  console.log(process.env.API_KEY);

  // fetch('https://geolocation-db.com/json/')
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
