import React, {useState, useEffect} from 'react'
import countryApi from '../api/countryApi'


export default function CountryEdit(props) {
    const [country, setCountry] = useState([])

    useEffect(()=>{
        countryApi.findOne(props.id.counID).then(data =>{
            setCountry(data)
        })
    },[])
  return (
    <div>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <form onSubmit={props.onSubmit}>
      	            <div>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Country ID : </label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" placeholder="Country ID" 
                        onChange = {props.handleOnChange('country_id')}/>
                    </div>
				    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Country Name : </label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" placeholder="Country Name" 
                        onChange = {props.handleOnChange('country_name')}/>
                    </div>
				    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Region ID : </label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'type="number" placeholder="Region ID" 
                        onChange = {props.handleOnChange('region_id')}/>
                    </div>
                    <div>
                        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'> Simpan </button>
                        <button className='text-white bg-red-700 hover:bg-red-800 focus:ring-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={()=>props.setDisplay(false)}> Cancel </button>
                    </div>
                </form>
            </div>
        </div>
     )
}
