import React, { useState, useEffect } from 'react'
import regionApi from '../api/regionApi'
import RegionAdd from './RegionAdd'
import RegionEdit from './RegionEdit'

export default function RegionView() {
    const [region, setRegion] = useState([])
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState({})
    const [values, setValues] = useState({
        region_id: undefined,
        region_name: '',
    })
    useEffect(() => {
        regionApi.list().then(data => {
            setRegion(data)
        })
        setRefresh(false)
    }, [refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onEdit = async () => {
        const payload = {
            region_id: (id.regID),
            region_name: (values.region_name)
        }

        await regionApi.update(payload)
            .then(() => {
                setDisplayEdit(false)
                setRefresh(true)
                window.alert('Data Successfully Edit')
            })

    }
    const onSubmit = async () => {
        const payload = {
            region_name: (values.region_name)
        }

        await regionApi.create(payload)
            .then(() => {
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })

    }
    const onDelete = async (id) => {
        regionApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (regID) => {
        setDisplayEdit(true)
        setId(regID)
    }
    return (
        <div>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                {
                    displayEdit
                        ?
                        <RegionEdit
                            onSubmit={onEdit}
                            handleOnChange={handleOnChange}
                            id={id}
                            setDisplay={setDisplayEdit}
                        />
                        :
                        display ?
                            <RegionAdd
                                onSubmit={onSubmit}
                                handleOnChange={handleOnChange}
                                setDisplay={setDisplay}
                            />
                            :
                            <>
                                <h2>List Region</h2>
                                <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Region </button>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <th scope="col" className="px-6 py-3">Region ID</th>
                                    <th scope="col" className="px-6 py-3">Region Name</th>
                                    </thead>
                                    <tbody className="overscroll-auto md:overscroll-contain">
                                        {
                                            region && region.map(reg => {
                                                return (
                                                    <tr key={reg.region_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{reg.region_name}</td>
                                                        <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(reg.region_id)}> Delete Region </button>
                                                        <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick({ regID: reg.region_id })}> Edit Region </button>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                          }
                    </div>
                </div>
             )
        }