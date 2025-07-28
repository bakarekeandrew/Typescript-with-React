import React, {useState} from 'react'

const ToggleButton: React.FC = () => {
    const [ show, setShow ] = useState(false);

    const handleButtonClick = () => {
        setShow(true);
    }
    const handleButtonClickRemove = () => {
        setShow(false);
    }
  return (
    <div className='flex justify-center items-center pt-10'>
        <button className="bg-amber-600 rounded-xl px-2" onClick={handleButtonClick}>Show details</button>
        <br />
        <div className='flex justify-center items-center pt-10'>
            {show && (
                <div>
                    <p>This means you toggle on show more details</p>
                    <button className="bg-amber-600 rounded-xl px-2" onClick={handleButtonClickRemove}>Hide details</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default ToggleButton