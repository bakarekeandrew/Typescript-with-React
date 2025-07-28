import React from 'react'


interface userProfileProps{
    name: string;
    email: string;
    avatar: string;
}
const userProfile: React.FC<userProfileProps> = (props) => {
  return (
    <div>
        <h1 className='font-bold items-center justify-center text-amber-600 text-center pt-10'>User profile card</h1>
        <div className = 'flex justify-center'>
            <div className='w-60 h-60 bg-gray-400 rounded-2xl'>
                <img src={props.avatar} alt="User Avatar" className='ml-10 pt-2 w-40 h-40 rounded-full bg-amber-900' />
                <h2 className='pl-3'>Name: {props.name}</h2>
                <h3 className='pl-3 text-[14.5px]'>Email: {props.email}</h3>
            
            </div>
        </div>
    </div>
  )
}

export default userProfile