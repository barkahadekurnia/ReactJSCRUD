import React, {useState, useEffect} from 'react';
import prasApi from '../api/prasApi';

export default function ProjectAssignmentView() {
    const [projectAssigment, setProjectAssigment] = useState ([])

    useEffect(()=> {
        projectAssigment.list().then(data =>{
            setProjectAssigment(data)
        })
    },[])
    return (
        <div>
            <div>
                    <h2>List Project Assignment</h2>
                    {
                            <>
                                <table>
                                    <th>Pras Proj ID</th>
                                    <th>Pras Proj Employee</th>
                                    <th>Pras Start Date</th>
                                    <th>Pras End Date </th>
                                    <th>Pras Status </th>
                                    <tbody>
                                        {
                                            projectAssigment&&projectAssigment.map( pra => (
                                                <tr key={pra.pras_proj_id}>
                                                    <td>{pra.pras_proj_id}</td>
                                                    <td>{pra.pras_employee_id}</td>
                                                    <td>{pra.pras_startdate}</td>
                                                    <td>{pra.pras_enddate}</td>
                                                    <td>{pra.pras_status}</td>
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