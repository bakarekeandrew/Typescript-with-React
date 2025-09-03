import React, { useState } from 'react'

const Validation:React.FC = () => {
  const [password, setPassword] = useState("");

  interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleChange = (e: HandleChangeEvent): void => {
    setPassword(e.target.value);
  }
  const isAtLeast8Characters = password.length >=8;
  const hasNumber = /\d/.test(password);
  const hasLowercase = password.toLowerCase() !== password;
  const hasUppercase = password.toUpperCase() !== password;
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <div>
        <h1>Input Validation</h1>
        <input type="text" className="w-80 border-2 rounded-2xl px-2"
            value={password}
            onChange={handleChange}
        />
    <div className='flex flex-col p-10'>
      <h1>Password Requirement</h1>
      <label>
            <input type="checkbox" 
                checked={isAtLeast8Characters}
            />
            At least 8 characters
        </label>
        <label>
            <input type="checkbox" 
            checked={hasNumber}
            />
            At least 1 number
        </label>
        <label>
            <input type="checkbox" 
             checked={hasLowercase}
            />
            lower case
        </label>   
        <label>
            <input type="checkbox" 
              checked={hasUppercase}
            />
            Uppercase
        </label>
        <label>
           <input type="checkbox" 
            checked={hasSpecialCharacter}
           />
            Contains a special character
        </label>
            
    </div>

    </div>
   
  )
}

export default Validation