import React from 'react'
import { useState, useEffect } from 'react'

const FetchingUserss: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/users');
                let data = await response.json();
                setUsers(data);
            } catch (e) {
                console.error("error while loading the data");
            }
        };
        fetchUsers();
    }, []);

    return (
        <>
            <div>FetchingUserss</div>
            {
                users.length === 0 ? <p>Loading...</p> : 
                <ul>
                        {users.map(users => (
                        <li key={users}>{users.name} - {users.email}</li>
                    ))}
                </ul>
            }
        </>
    );
}

export default FetchingUserss