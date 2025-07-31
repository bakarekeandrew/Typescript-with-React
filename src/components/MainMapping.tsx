import React from 'react'
import MappingListComponent from './MappingListComponent'

const MainMapping:React.FC = () => {
  const animals = ['🦊dog', '🐰cat', '🐓chicken', '🐄cow', '🐏sheep', '🐎horse', '🐖pig'];
  return (
    <div className='flex flex-col items-center justify-center'>
        <MappingListComponent animals={animals} />
    </div>
  )
}

export default MainMapping