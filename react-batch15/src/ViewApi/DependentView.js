import React, {useState, useEffect} from 'react'
import dependentApi from '../api/dependentApi'
import DependentAdd from './DependentAdd'
import DependentEdit from './DependentEdit'

export default function DependentView() {
    const [dependent, setDependent] = useState([])
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState (false)
    const [id, setId] = useState({})
    const [values, setValues] = useState({
        dependent_id : undefined,
        first_name : '',
        last_name : '',
        relationship : '',
        employee_id : undefined
    })

    useEffect(()=>{
        dependentApi.list().then(data =>{
            setDependent(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onEdit = async () =>{
        const payload ={
            dependent_id :(id.depenID),
            first_name : (values.first_name),
            last_name : (values.last_name),
            relationship : (values.relationship),
            employee_id : (values.employee_id)
        }

        await dependentApi.update(payload)
        .then(() => {
            setDisplayEdit(false)
            setRefresh(true)
            window.alert('Data Successfully Edit')
        })
    }

    const onSubmit = async () => {
        const payload = {

        dependent_id :(values.dependent_id),
        first_name : (values.first_name),
        last_name : (values.last_name),
        relationship : (values.relationship),
        employee_id : (values.employee_id)
        }

        await dependentApi.create(payload)
            .then(() => {
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })

    }
    const onDelete = async (id) => {
        dependentApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    const onClick = (depenID) => {
        setDisplayEdit(true)
        setId(depenID)
    }
    return (
        <div>
            <div className = "relative overflow-x-auto shadow-md sm:rounded-lg">
                    {
                        displayEdit ?
                        <DependentEdit
                            onSubmit={onEdit}
						    handleOnChange={handleOnChange}
						    id={id}
						    setDisplay={setDisplayEdit}
					/>
					:  
                    display ?
                        <DependentAdd
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                        />
                        :
                        <>
                        <button button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => setDisplay(true)}> Add Dependent </button>
                               <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400 table-auto ">
                                    <thead className="text-xs text-grey-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <th scope="col" className="px-6 py-3">Dependent ID</th>
                                        <th scope="col" className="px-6 py-3">First Name</th>
                                        <th scope="col" className="px-6 py-3">Last Name</th>
                                        <th scope="col" className="px-6 py-3">Relationship</th>
                                        <th scope="col" className="px-6 py-3">Employee ID</th>
                                    </thead>
                                    <tbody className="overscroll-auto md:overscroll-contain">
                                        {
                                            dependent&&dependent.map( depent => (
                                                <tr key={depent.dependent_id} className = "bg-white border-b dark:bg-gray-900 dark:border-gray-900">
                                                    <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{depent.dependent_id}</td>
                                                    <td className="px-6 py-2">{depent.first_name}</td>
                                                    <td className="px-6 py-2">{depent.last_name}</td>
                                                    <td className="px-6 py-2">{depent.relationship}</td>
                                                    <td className="px-6 py-2">{depent.employee_id}</td>
                                                    <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"onClick={() => onDelete(depent.dependent_id)}> Delete Region </button>
                                                    <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"onClick={() => onClick({ depenID: depent.dependent_id })}> Edit Dependent </button>
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
