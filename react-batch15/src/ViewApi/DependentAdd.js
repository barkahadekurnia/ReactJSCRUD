import React from 'react'

export default function DependentAdd(props) {
    return (
     <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <form onSubmit={props.onSubmit}>
                <div>
                     <label>Dependent ID :</label>
                     <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type = "number" placeholder="Dependent ID"
                     onChange={props.handleOnChange('dependent_id')}/>
                </div>
                <div>
                     <label>First Name :</label>
                     <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'type = "text" placeholder="First Name"
                     onChange={props.handleOnChange('first_name')}/>
                </div>
                <div>
                     <label>Last Name :</label>
                     <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type = "text" placeholder="Last Name"
                     onChange={props.handleOnChange('last_name')}/>
                </div>
                <div>
                     <label>Relationship :</label>
                     <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type = "text" placeholder="Relationship"
                     onChange={props.handleOnChange('relationship')}/>
                </div>
                <div>
                     <label>Employee ID :</label>
                     <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type = "text" placeholder="Employee ID"
                     onChange={props.handleOnChange('employee_id')}/>
                </div>
                <div>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'> Simpan </button>
                    <button className='text-white bg-red-700 hover:bg-red-800 focus:ring-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={()=>props.setDisplay(false)}> Cancel </button>
                </div>
            </form>
        </div>
      )
    }