import React from 'react'

const MappingList: React.FC = () => {
  
  const array: string[] = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1>Mapping Through the list of String</h1>
        <ul className='list-disc'>
            {
                array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default MappingList