import React, {useEffect, useState} from 'react'


interface User {
    id: number;
    name: string;
    username: string;
}

const FetchingData:React.FC  = () => {
   const[data, setData] = useState<User[]>([]);
   useEffect(() => {
     const fetchData = async () => {
        try{
           const response = await fetch("https://jsonplaceholder.typicode.com/users");
             const result: User[] = await response.json();
             console.log(result);
             setData(result);
        }catch(error) {
            console.error("Error fetching data:", error);
        }
     } 
        fetchData();
   }, []);
  return (
    // <div>FetchingData {JSON.stringify(data)}</div>
    <div>
          <h1 className='text-lg font-bold m-2'>List of users</h1>
          {data.map((user) => (
            <div key={user.id} className="border p-2 rounded mb-2">
                <h2><strong>ID: </strong>{user.id}</h2>           
                <h2><strong>Name: </strong>{user.name}</h2>
                <h2><strong>Username: </strong>{user.username}</h2>

            </div>
          ))}
    </div>

  )
}

export default FetchingData