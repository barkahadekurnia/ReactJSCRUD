import React, {useState, useEffect} from 'react'
import projectApi from '../api/projectApi'

export default function ProtView() {
    const [project, setProject] = useState ([])

    useEffect(()=>{
        projectApi.list().then(data =>{
            setProject(data)
        })
    },[])
    return (
        <div>
            <div>
                    <h2>List Projects</h2>
                    {
                            <>
                                <table>
                                    <th>Project ID</th>
                                    <th>Project Name</th>
                                    <th>Create Don </th>
                                    <th>Project Due Date </th>
                                    <th>Project Cust Name</th>
                                    <th>Description</th>
                                    <th>Status </th>
                                    <th>Amount </th>
                                    <th>Project Account Mgr</th>
                                    <th>Employee ID</th>
                                    <tbody>
                                        {
                                            project&&project.map( pro => (
                                                <tr key={pro.proj_id}>
                                                    <td>{pro.proj_id}</td>
                                                    <td>{pro.proj_name}</td>
                                                    <td>{pro.proj_createdon}</td>
                                                    <td>{pro.proj_duedate}</td>
                                                    <td>{pro.proj_cust_name}</td>
                                                    <td>{pro.proj_description}</td>
                                                    <td>{pro.proj_status}</td>
                                                    <td>{pro.proj_amount}</td>
                                                    <td>{pro.proj_account_mgr}</td>
                                                    <td>{pro.employee_id}</td>
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