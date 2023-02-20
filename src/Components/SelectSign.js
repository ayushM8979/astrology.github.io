import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';


const SelectSign = ({onSignSelected}) => {

    const [signs, setSigns] = useState([])
    

    const [details , setDetails] = useState({
        name :'',
        email:'',
        date:''
      })
    
      const dateInputRef = useRef(null);
    
          
      const handleChange = (e) => {
        e.preventDefault()
        const {name} = e.target
        setDetails({...details , [name] : e.target.value})
      };
    
    
    useEffect(() => {
        data()
      }, [])
    
      const data = async () => {
        const res = await axios.get("http://sandipbgt.com/theastrologer/api/sunsigns")
        setSigns(res.data)
      }

  return (
    <>
     <form>
              Name: <input type='text' style={{ fontSize: "25px" }} placeholder='Enter Name' name='name'  onChange={handleChange}  /> <br /><br />
              Date: <input
                type="date"
                onChange={handleChange}
                ref={dateInputRef}
                style={{ fontSize: "25px" }}
                name='date'
              /><br /><br />
              Email: <input type='email' style={{ fontSize: "25px" }} placeholder='Enter Email' name='email'  onChange={handleChange} /><br /><br />

              {/* <button type='submit' style={{ fontSize: "25px" }}>Submit</button> */}
            </form>
    <h2>Please Select a Sign</h2>
          <div className='grid'>
        {signs.map((sign) => {
          return <button className='sign' key={sign} onClick={()=> onSignSelected(sign)} >{sign}</button>
        })}
        </div>
    </>
  )
}

export default SelectSign