import './App.css';
import React, {useState } from 'react';
import SelectSign from './Components/SelectSign';
import SelectTimeframe from './Components/SelectTimeframe';
import Horoscope from './Components/Horoscope';

function App() {

  const [selectedsign , setSelectedSign] = useState(null)
  const [selectedTimeframe , setSelectedTimeframe] = useState(null)

  const restart = () =>{
    setSelectedSign(null)
    setSelectedTimeframe(null)
  }


  return (
    <>
      <div className='App'>
        <h1>The Horoscope App</h1>
      

        {!selectedsign &&  <SelectSign onSignSelected={setSelectedSign} />}

      {selectedsign && !selectedTimeframe &&  <SelectTimeframe onTimeframeSelected={setSelectedTimeframe} />}

      {selectedTimeframe  && selectedsign &&  <Horoscope sign={selectedsign} timeframe={selectedTimeframe} />}
      <button onClick={()=> restart()}>Restart</button>
      </div>
    </>
  );
}

export default App;
