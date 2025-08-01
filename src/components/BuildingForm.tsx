import React, {useState} from 'react'

const BuildingForm:React.FC = () => {
    const[firstName, setFirstName] = useState<string>("");
    const[secondName, setSecondName] = useState<string>("");

    const handleEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alert("Hello " + firstName + " " + secondName + " !");
        setFirstName("");
        setSecondName("");

    }
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='pt-10'>
            <input type='text' value={firstName} onChange={(e) =>setFirstName(e.target.value)} placeholder='First Name' className='border-b-blue-500' />           
        </div>
        <br />
        <div className='pb-10 '>
            <input type='text' value={secondName} onChange={(e) =>setSecondName(e.target.value)} placeholder='Second Name' className='border-b-blue-500' />           
        </div>
        <button type='submit' onClick={handleEvent} className='text-lg bg-red-600 px-3 h-12 w-60 text-center rounded-lg'>Greet Me</button>  
    </div>
  )
}

export default BuildingForm