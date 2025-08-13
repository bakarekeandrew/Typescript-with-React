import React, {useState} from 'react'

const Todos: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

     
   const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
     setTodo(e.target.value);
   }
   const handleAddButton = () => {
     setTodos(prev => [...prev, todo]);
     setTodo("");
   }
  
  return (
    
    <div className='pt-10 p-10'>
        <div className='flex gap-x-4'>
            <input className='w-80 border-amber-600' value={todo} onChange={handleEvent}/> 
            <div className='bg-green-400 rounded-xl'>
                <button className='p-2' onClick={handleAddButton}>Add</button>       
            </div> 
        </div>
        <ul>
            {todos.map((item, index) =>
             (<li key={index}>{item}</li>
           ))}
        </ul>
    </div>
    
  )
}

export default Todos