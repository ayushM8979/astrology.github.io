import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Horoscope = ({ sign, timeframe }) => {
    

    const [horoscope, setHoroscope] = useState([])

    console.log(horoscope , 'hii')
    useEffect(() => {
        data()
      }, [sign, timeframe])
    
      const data = async () => {
        const res = await axios.get(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}/`)
        setHoroscope(res.data)
      }

    return (
      <div style={{backgroundColor:'blue'}}>
      <h2>{timeframe} , your horoscope for {sign} is ...</h2>
      <p> {horoscope.horoscope} </p>
      </div> 
    );
  };


export default Horoscope;