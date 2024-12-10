import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [interest,setInterest] =useState(0)
  const [principale,setPrinciple] =useState(0)
  const [rate,setRate] =useState(0)
  const [year,setYear] =useState(0)
  
  const [invalidprinciple,setinvalidprinciple] = useState(false)
  const [invalidrate,setinvalidrate]  = useState(false)
  const [invalidyear,setinvalidyear] = useState(false)
 
  const validateInput = (inputTag) =>{
    console.log(inputTag,typeof inputTag);
    const {name,value} = inputTag
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    console.log(!!value.match(/^\d*.?\d+$/));
    if(name =='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidprinciple(false)  
      }else{
        setinvalidprinciple(true)
      }
    }else if(name == 'rate'){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidrate(false)  
      }else{
        setinvalidrate(true)
      }
    }else if(name == 'year'){
      setYear(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidyear(false)  
      }else{
        setinvalidyear(true)
      }
      
    }
  //  } console.log(name,value);
  }
  
const handleCalculate = (e) =>{
  e.preventDefault()
  console.log("Button Clicked");
  if(principale&&rate&&year){
    setInterest(principale*rate*year/100)
  }else{
    alert("Please Fill the form completly")
  }
  
}

const handleReset =()=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setinvalidprinciple(0)
  setinvalidrate(0)
  setinvalidyear(0)
}

  return (
    <>
      
      <div style={{width: '100%', minHeight: "100vh"}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate  your Simple interest Easilty !</p>
        <div className='bg-warning p-5 rounded text-center'>
          <h1>₹{interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
         {/* principle Amount */}
       <div className='mb-3'>
       <TextField value={principale || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
       </div>
       {/* For invalid principle */}
      {invalidprinciple &&  <div className='text-danger fw-bolder mb-3'>
        Invalid principle
       </div>}
       {/* Rate */}
       <div className='mb-3'>
       <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="Rate" variant="outlined" />
       </div>
       {/* for invalid rate */}
         {/* For invalid principle */}
      {invalidrate &&  <div className='text-danger fw-bolder mb-3'>
        Invalid rate
       </div>}
       {/* year */}
       <div className='mb-3'>
       <TextField value={year || ""} name='year'  onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Time Period (Yr)" variant="outlined" />
       </div>
       {/* invalid year */}
       { invalidyear &&  <div className='text-danger fw-bolder mb-3'>
        Invalid year
       </div>}
       <Stack direction="row" spacing={2}>
       <Button type='submit'onClick={handleCalculate} disabled={invalidprinciple || invalidrate || invalidyear} variant="contained" style={{width:'50%',height:'70px'}}className='bg-dark'>Calculate</Button>
       <Button onClick={handleReset} variant="outlined" style={{width:'50%',height:'70px'}} className='border border-dark text-dark'>RESET</Button>
      </Stack>
        </form>
      </div>
    </div>

   </>
  )
}

export default App