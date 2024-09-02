import './angleWidth.css'
import { URL } from '../../global'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AngleWidth = () => {

    const [recipeDetails, setRecipeDetails] = useState({})
    let [shiftNo, setShiftNo] = useState(1)

    function fetchRecipeDetails(shiftNo) {
        try {
            axios.get(`${URL}/recipe-details/details/${shiftNo}`)
                .then((res) => {
                    // console.log(res)
                    setRecipeDetails(res.data)
                })
        } catch (error) { console.error(error.message) }
    }

    useEffect(() => {
        const MyInterval = setInterval(() => {
            setShiftNo(shiftNo += 1)
            // console.log(shiftNo)
        }, 10000)
        setTimeout(() => {
            clearInterval(MyInterval)
            // console.log("interval Cleared")
        }, 50000)
    }, [])

    useEffect(() => {
        fetchRecipeDetails(shiftNo)
    }, [shiftNo])

    return (
        <div className='angle-width' >
            <div >
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th id='angle' >ANGLE</th>
                            <th id='width' >WIDTH</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {recipeDetails.angleWidth?.map((items, index) => {
                                return <tr>
                                    <td id='cut' key={items[3]} >{items[0]} :</td>
                                    <td id='angle' key={items[4]} >{items[1]}</td>
                                    <td id='width' key={items[5]} >{items[2]}</td>
                                </tr>
                            })} */}
                        <tr>
                            <td id='cut' >1stCut</td>
                            <td id='angle' >{recipeDetails.firstCut1}</td>
                            <td id='width' >{recipeDetails.firstCut2}</td>
                        </tr>
                        <tr>
                            <td id='cut' >2ndCut</td>
                            <td id='angle' >{recipeDetails.secondCut1}</td>
                            <td id='width' >{recipeDetails.secondCut2}</td>
                        </tr>
                        <tr>
                            <td id='cut' >3rdCut</td>
                            <td id='angle' >{recipeDetails.thirdCut1}</td>
                            <td id='width' >{recipeDetails.thirdCut2}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}