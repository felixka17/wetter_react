import { useState } from 'react'
import WeatherApp from "/Wetter_LC/WeatherApp.jsx"
import Welcome from "/Wetter_LC/Welcome.jsx"
import "/Wetter_LC/Welcome.css"



function App() {
return (
  <div>
    <div className="app">
      <WeatherApp />
    </div>
    <div>
      <Welcome />
    </div>
  </div>
)


   
}

export default App;
