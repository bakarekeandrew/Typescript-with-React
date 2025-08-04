import React from 'react'
import { useForm, type FieldValues } from 'react-hook-form'

const Form: React.FC = () => {
    //  const nameRef = useRef<HTMLInputElement>(null);
    //  const ageRef = useRef<HTMLInputElement>(null);
    //  const person = {name: "", age: 0};
    // const [person, setPerson] = useState({
    //     name: "",
    //     age: ''
    // })

    // const handleSubmit = (event:FormEvent) => {
    //     event.preventDefault();
    //     // if(nameRef.current !== null){
    //     //     person.name = nameRef.current.value;           
    //     // }
    //     // if(ageRef.current !== null){
    //     //     person.age = parseInt(ageRef.current.value);           
    //     // }
    //     console.log(person);
    // }
    interface FormData {
        Name: string;
        Age: number;
    }
    const { register, handleSubmit, formState:{ errors, isValid }} = useForm<FormData>()
    const onSubmit = (data:FormData) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mb-5 '>
            <label htmlFor='Name'>Name</label>
            <input { ...register('Name', { required: true, minLength: 3}) } type='text' id='Name' placeholder='Enter your name' className='border-b-blue-500 w-60 h-10' />
            { errors.Name?.type === 'required' && <p className='text-red-500'>name for this field is required</p> }
            { errors.Name?.type === 'minLength' && <p className='text-red-500'>name must have atleast 3 characters</p> }

        </div>
        <div className='flex flex-col mb-5'>
            <label htmlFor='Age'>Age</label>
            <input { ...register('Age') } type='number' id='Age' placeholder='Enter your age' className='border-b-blue-500 w-60 h-10' />
        </div>
        <button disabled={!isValid} className='bg-blue-500 px-4 text-center rounded-lg w-40 h-10'>Submit</button>
    </form>
  )
}

export default Form