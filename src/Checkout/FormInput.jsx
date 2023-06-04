
const TextField = ({label, name,register}) => {
     return (
       <div className="mb-2">
      <label>
        <span>{label}</span>
      </label>
        <input required type="text" placeholder={name} {...register(name)}   className='block border-2 rounded' />
      </div>
     )
}


export default TextField;



