import React from 'react'
import Button from './Button'

const ButtonComponent:React.FC = () => {
  return (
     <div className='flex justify-center items-center h-screen gap-4'>
        <Button label="Button 1"onClick={()=> alert("You clicked on Button 1")}/>
        <Button label="Button 2"onClick={()=> alert("You clicked on Button 2")}/>
        <Button label="Button 3"onClick={()=> alert("You clicked on Button 3")}/>
     </div>






    // <div className='flex justify-center items-center h-screen gap-4'>
    //     <button className='bg-blue-600 rounded-lg px-3 py-2' onClick={()=>alert("You clicked on Button 1")}>Button 1</button>
    //     <button className='bg-blue-600 rounded-lg px-3 py-2' onClick={() => alert("You clicked on Button 2")}>Button 2</button>
    //     <button className='bg-blue-600 rounded-lg px-3 py-2' onClick={() => alert("You clicked on Button 3")}>Button 3</button>

    // </div>
  )
}

export default ButtonComponent