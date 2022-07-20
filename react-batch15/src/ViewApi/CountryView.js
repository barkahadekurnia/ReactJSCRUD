import React, {useState, useEffect} from 'react'
import countryApi from '../api/countryApi'
import CountryAdd from './CountryAdd'
import CountryEdit from './CountryEdit'

export default function CountryView() {
	const [country, setCountry] = useState([])
	const [display, setDisplay] = useState(false)
	const [displayEdit, setDisplayEdit] = useState (false)
    const [refresh, setRefresh] = useState(false)
	const [id, setId] = useState({})
    const [values, setValues] = useState({
    country_id : undefined,
    country_name: '',
	region_id: undefined
  })

	useEffect(() => {
		countryApi.list().then(data => {
			setCountry(data)
		})
		setRefresh(false)
	}, [refresh])

	const handleOnChange = name => event => {
		setValues({ ...values, [name]: event.target.value })
	}

	const onEdit = async ()=>{
		const payload = {
			country_id: (id.counID), 
			country_name: (values.country_name),
			region_id: (values.region_id)
		}
		await countryApi.update(payload)
		.then(()=>{
			
			setDisplayEdit(false)
			setRefresh(true)
			window.alert('Data Successfully Edit')
		})

}

	const onSubmit = async () => {
		const payload = {
			country_id: (values.country_id),
			country_name: (values.country_name),
			region_id: (values.region_id)
		}

		await countryApi.create(payload)
			.then(() => {
				setDisplay(false)
				setRefresh(true)
				window.alert('Data Successfully Insert')
			})
	}

	const onDelete = async (id) => {
		countryApi.deleted(id)
			.then(() => {
				setRefresh(true)
				window.alert('Data Successfully Delete')
			})
	}

	const onClick = (counID) => {
        setDisplayEdit(true)
        setId(counID)
    }

return (
        <div>
            <div className = "relative overflow-x-auto shadow-md sm:rounded-lg">
                {
					displayEdit
					?
					<CountryEdit
						onSubmit={onEdit}
						handleOnChange={handleOnChange}
						id={id}
						setDisplay={setDisplayEdit}
					/>
					:
                    display ?
                        <CountryAdd
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                        />
                        :
                        <>
						<button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							 onClick={() => setDisplay(true)}> Add Country </button>
                                <table  className="w-full text-sm text-left text-gray-900 dark:text-gray-400 table-auto ">
								<thead className="text-xs text-grey-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<th scope="col" className="px-6 py-3">Country ID</th>
								<th scope="col" className="px-6 py-3">Country Name</th>
								<th scope="col" className="px-6 py-3">Region ID</th>
								</thead>
								<tbody className="overscroll-auto md:overscroll-contain">
									{
										country.map(count => (
											<tr key={count.country_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
												<td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{count.country_id}</td>
												<td className="px-6 py-2">{count.country_name}</td>
												<td className="px-6 py-2">{count.region_id}</td>
												<button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(count.country_id)}> Delete Country </button>
												<button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick({ counID: count.country_id })}> Edit Region </button>
											</tr>
										))
									}
								</tbody>
							</table>
                        </>
                }
            </div>
        </div>
    )
}
                        