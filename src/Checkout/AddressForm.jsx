import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import TextField from './FormInput';



function AddressForm() {
  const {register,handleSubmit} = useForm();
  const test = (values) => {
        console.log(values)
 
  };

  return (
    <div>
        <form onSubmit={handleSubmit((data) => {
          console.log(data)
        })}>
        
          <TextField register = {register} label = 'First Name' name = 'firstName'/>
          <TextField register = {register} label = 'Last Name' name = 'lastName'/>
          <TextField register = {register} label = 'Email' name = 'email'/>
          <TextField register = {register} label = 'Address' name = 'address'/>
          <TextField register = {register} label = 'city' name = 'city'/>
          <TextField register={register} name = 'Zip' label = 'Zip / Postal code'/>

          <button type='submit' className='border-2 bg-blue-200'>
            Next
          </button>
        </form>
    </div>
  )
}

export default AddressForm