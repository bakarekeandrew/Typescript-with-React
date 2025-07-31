import React from 'react'

interface MappingListComponentProps {
    animals: string[];
}

const MappingListComponent: React.FC<MappingListComponentProps> = ({animals}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        {
            animals.map((animal, index) => (
            <div key={index} className='bg-gray-200 border-amber-400 p-4 w-32 h-16 text-center'>
                <h2>{animal}</h2>
            </div>
            ))
        }
    </div>
  )
}

export default MappingListComponent