import React, { useState } from 'react'
import Alert from '@mui/material/Alert';

function AgeVerification({handleAgeVerification}) {
  const [displayAlert, setDisplayAlert] = useState(false);
  const alertWarning = () => {
       setDisplayAlert(true)
  }
  return (
    <div className='border-2 h-screen text-center p-10 flex flex-col gap-2'>
        <h1>BEFORE ENTERING THIS WEBSITE YOU MUST BE OF LEGAL AGE</h1>
        {displayAlert?
          <Alert severity = 'warning'><span>Please Come back when you are older.</span></Alert>
        :false}
        <button onClick = {handleAgeVerification} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Yes, I'M LEGAL AGE
        </button>
        <button onClick = {alertWarning}className='bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded'>
          NO, I'M Not
        </button>
       
    </div>
  )
}

export default AgeVerification;