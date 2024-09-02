import './hourBasedProduction.css'
import React, { useEffect, useState } from 'react';
import { URL } from '../../global';
import { Line } from 'react-chartjs-2'
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    plugins
} from 'chart.js';
import axios from 'axios';

Chartjs.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
)


export const HourBasedProduction = () => {

    let [shiftNo, setShiftNo] = useState(1)
    const [array, setArray] = useState([])
    // console.log(array)


    const getHourDetails = (shiftNo) => {
        try {
            axios.get(`${URL}/hour-based-production/get-hours/${shiftNo}`)
                .then((res) => {
                    setArray(res.data.hourBasedProduction)
                    // console.log(res.data.hourBasedProduction)
                })

        } catch (err) {
            console.error(err.messsage)
        }
    }

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

    useEffect(() => {
        getHourDetails(shiftNo)
    }, [shiftNo])

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
                label: "Work Completed",
                data: array,
                borderColor: "red"
            }
        ]
    };

    return (
        <div className='hour-based-production' >
            <div>
                <header style={{ fontWeight: 800, fontSize: "large", padding: '5px', justifyContent:'center' }}  ><h3>Hour Based Production</h3></header>
            </div>

            <div className='hour-based-production-size' ><Line options={options} data={data} /></div>
        </div>
    )
}