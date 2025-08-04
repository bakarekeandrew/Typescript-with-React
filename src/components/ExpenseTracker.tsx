import React, {useState} from 'react'
import { useForm, type FieldValues } from 'react-hook-form'

interface Expense {
    Description: string;
    Amount: number;
    Categories: string;
}

const ExpenseTracker: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<Expense>();
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const onSubmit = (data: Expense) => {
        setExpenses((prev) => [...prev, data]);
        console.log(data);     
    }
    const handleDelete = (index: number) => {
        setExpenses((prev) => prev.filter((_, i) => i !== index));
    }

  return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 items-center justify-center'>
            <div className='flex flex-col mb-3'>
                <label htmlFor="Description">Description</label>
                <input { ...register('Description', {required: true, minLength: 3}) } type="text" id='Description' className='border-b-blue-500 w-60 h-10'/>
                {errors.Description?.type === 'required' && <p className='text-red-500'>This field is required</p>}
                {errors.Description?.type === 'minLength' && <p className='text-red-500'>This fields should contain atleast 3 characters</p>}

            </div>
        
            <div className='flex flex-col mb-3'>
                <label htmlFor="Amount">Amount</label>
                <input { ...register('Amount', {required: true}) } type="number" id='Amount' className='border-b-blue-500 w-60 h-10'/>
                {errors.Amount?.type === 'required' && <p className='text-red-500'>This field is required</p>}
            </div>
            <div className='flex flex-col mb-3'>
                <select { ...register('Categories', {required: true}) } defaultValue="" id="Categories" className='border-b-blue-500 w-60 h-10'>
                    <option value='' disabled>Select Category</option>
                    <option value='Grocelies'>Groceries</option>
                    <option value='Utilities'>Utilities</option>
                    <option value='Entertainment'>Entertainment</option>
                </select>
                {errors.Categories?.type === 'required' && <p className='text-red-500'>This field is required</p>}
            </div>
            <button disabled={!isValid} className='bg-blue-500 px-4 text-center rounded-lg w-40 h-10'>Add Expense</button>
            
        </form>

        <div className='flex flex-col items-center justify-center mt-5'>
            <select className='border-b-blue-500 w-60 h-10'>
                <option value=''>All Category</option>  
                <option value='Groceries'>Groceries</option>
                <option value='Utilities'>Utilities</option>
                <option value='Entertainment'>Entertainment</option>
            </select>
        </div>

        <div className='flex flex-col items-center justify-center mt-5'>
            <table className='border-collapse border border-gray-300 w-80'>
                <th className='bg-gray-200 border border-gray-300'>
                    <tr className='border border-gray-300 flex flex-row gap-32'>
                        <td className='text-bold text-center'>Description</td>
                        <td className='text-bold text-center'>Amount</td>
                        <td className='text-bold text-center'>Category</td>
                        <td className='text-bold text-center'></td>

                    </tr>
                </th>
                <tbody>
                    {
                        expenses.map((expense, index) => (
                            <tr key={index} className='border border-gray-300 flex flex-row gap-32 mb-4'>
                                <td className='text-center'>{expense.Description}</td>
                                <td  className='text-center'>{expense.Amount}</td>
                                <td  className='text-center'>{expense.Categories}</td>
                                <td className='text-center'>
                                    <button onClick={() =>handleDelete(index)} className='border-red-500 border-3 text-red-500 px-2 rounded'>Delete</button>
                                </td>    
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ExpenseTracker