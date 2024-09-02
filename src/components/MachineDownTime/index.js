import './machineDownTime.css'
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { URL } from '../../global';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const MachineDownTime = () => {

    const [array, setArray] = useState([])
    let [shiftNo, setShiftNo] = useState(1)

    function fetchMachineDownTime(shiftNo) {
        try {
            axios.get(`${URL}/machine-down-time/get-dowm-time/${shiftNo}`)
                .then((res) => {
                    setArray(res.data.machineDownTime)
                    // console.log(res.data.machineDownTime)
                })
        }
        catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        fetchMachineDownTime(shiftNo)
    }, [shiftNo])

    useEffect(() => {
        const myInterval = setInterval(() => {
            setShiftNo(shiftNo += 1)
            // console.log(shiftNo)
        }, 10000)
        setTimeout(() => {
            clearInterval(myInterval)
            // console.log("interval cleared")
        }, 80000)
    }, [])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }

    const data = {
        labels: [
            "1st Hour",
            "2nd Hour",
            "3rd Hour",
            "4th Hour",
            "5th Hour",
            "6th Hour",
            "7th Hour",
            "8th Hour"
        ],
        datasets: [
            {
                label: "Down Time Minutes",
                data: array,
                backgroundColor: "orange",
                borderColor: "red",
                borderWidth: 1
            }
        ]
    }

    return (

        <div className='machine-down-time' >
            <div  >
                <header style={{ fontWeight: 800, fontSize: "large", padding: '5px', justifyItems: 'center' }} ><h3>MachineDownTime</h3></header>
            </div>
            <div className='machine-down-time-size' >
                <Bar options={options} data={data} />
            </div>
        </div>

    )
}