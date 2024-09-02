import "./shiftDetails.css"
import React, { useEffect, useState } from 'react';
import { URL } from '../../global.js';
import axios from 'axios';

export const ShiftDetails = () => {

    const [shiftDetails, setShiftDetails] = useState({})
    let [shiftNo, setShiftNo] = useState(1)


    function fetchShiftDetails(shiftNo) {
        try {
            axios.get(`${URL}/shift-details/details/${shiftNo}`)
                .then((res) => {
                    // console.log(res)
                    setShiftDetails(res.data)
                })
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        const MyInterval = setInterval(() => {
            setShiftNo(shiftNo += 1)
            console.log(shiftNo)
        }, 10000)

        setTimeout(() => {
            clearInterval(MyInterval)
            // console.log("this is after fifty seconds")
        }, 50000)
    }, [])

    useEffect(() => {
        fetchShiftDetails(shiftNo)
    }, [shiftNo])

    // console.log(shiftDetails.targetAchieve)

    return (
        <div className="shiftDetails" >

            <div className='upper-shiftDetails' >

                <div className='upper-shiftDetails-card' >
                    <div >
                        <table><thead>
                            <tr>
                                <th style={{ fontWeight: 800, fontSize: "large" }} >Plan</th>
                                <th style={{ fontWeight: 800, fontSize: "large" }} >Complete</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td id='plan' >{shiftDetails.plan}</td>
                                    <td id='complete' >{shiftDetails.complete}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='upper-shiftDetails-card' >
                    <div >
                        <header style={{ fontWeight: 800, fontSize: "large", padding:'5px' }} >Operator Name</header>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
                            {shiftDetails.operaterName?.map((item, index) => {
                                return <p key={index} >{item}</p>
                            })}
                        </div>
                    </div>
                </div>

                <div className='upper-shiftDetails-card' >
                    <div  >
                        <header style={{ fontWeight: 800, fontSize: "large", padding:'5px' }} >Target Achieved</header>
                        <p id='targetAchieve' >{shiftDetails.targetAchieve}%</p>
                    </div>
                </div>
            </div>

            <div className='lower-shiftDetails' >
                <div className="total-fab-meters" >
                    <div>
                        <header style={{ fontWeight: 800, fontSize: "large", padding:'5px' }} >Total FAB Meters</header>
                        <p style={{ marginTop: "2px", textAlign: "center" }} >{shiftDetails.totalFabMeters}</p>
                    </div>
                </div>
                
                <div className="machine" >
                    <div>
                        <header style={{ fontWeight: 800, fontSize: "large", padding:'5px' }} >Machine</header>
                        <p style={{ marginTop: "2px", textAlign: "center" }} >{shiftDetails.machine}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}