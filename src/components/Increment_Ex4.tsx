import React, {useState} from 'react'

const Increment_Ex4: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(c => c+1);
    }
  return (
    <div className='flex justify-center items-center h-screen flex-col '>
        <h1>Button has been clicked: {count} times</h1>
        <button className="bg-gray-400 px-3"  onClick={handleCount} >Click Me</button>
    </div>
  )
}

export default Increment_Ex4