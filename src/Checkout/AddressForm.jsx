import { useForm } from 'react-hook-form';
import TextField from './FormInput';



function AddressForm({changeStep ,collectAddressInformation}) {
  const {register,handleSubmit} = useForm();
  

  return (
    <div className='flex  gap-4 justify-center'>
     
        <form onSubmit={handleSubmit((data) => {
            collectAddressInformation(data)
        })}>
           
        <div className='text-center  my-2'>
        Address
         </div>
          <TextField register = {register} label = 'First Name' name = 'firstName'/>
          <TextField register = {register} label = 'Last Name' name = 'lastName'/>
          <TextField register = {register} label = 'Email' name = 'email'/>
          <TextField register = {register} label = 'Address' name = 'address'/>
          <TextField register = {register} label = 'city' name = 'city'/>
          <TextField register={register} name = 'Zip' label = 'Zip / Postal code'/>

          <button type='submit' className='border-2 bg-blue-200 w-1/2 rounded mt-2'>
            Next
          </button>
        </form>
    </div>
  )
}

export default AddressForm