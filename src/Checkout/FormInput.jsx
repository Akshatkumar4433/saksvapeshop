import React from 'react';


const TextField = ({label, name,register}) => {
     return (
      <div className=' p-2 '>
      <label>
        <span>{label}</span>
        <input required type="text" placeholder={name} {...register(name)}   className='block border-2 pt-2 mt-1 rounded' />
      </label>
    </div>
     )
}


export default TextField;



