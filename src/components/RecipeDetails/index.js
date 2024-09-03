import './RecipeDetails.css'
import { URL } from '../../global'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const RecipeDetails = () => {

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
        <div className='RecipeDetails' >

            <div style={{display:'flex', justifyContent:"center", alignItems:'center'}} >
                <header><h3>Recipe Details</h3></header>
            </div>

            <div style={{ display: "flex", justifyContent: 'space-evenly', marginTop: '15px' }}>
                <div style={{display:"flex",flexDirection:"column",gap:"15px"}} >
                    <p><span style={{ fontWeight: 800, fontSize: "large" }} >RECIPE NAME    </span></p>
                    <p><span style={{ fontWeight: 800, fontSize: "large" }} >SAP NAME       </span></p>
                    <p><span style={{ fontWeight: 800, fontSize: "large" }} >FABRIC CODE    </span></p>
                    <p><span style={{ fontWeight: 800, fontSize: "large" }} >CUTTING WIDTH  </span></p>
                    <p><span style={{ fontWeight: 800, fontSize: "large" }} >CUTTING ANGLE  </span></p>
                </div>
                <div style={{  display: "flex", gap: "18px", flexDirection:"column"}} >
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </div>
                <div style={{  display: "flex", gap: "18px", flexDirection:"column"}} >
                    <p><span></span>{recipeDetails.recipeName}</p>
                    <p><span></span>{recipeDetails.SAPname}</p>
                    <p><span></span>{recipeDetails.fabricCode}</p>
                    <p><span></span>{recipeDetails.cuttingWidth}</p>
                    <p><span></span>{recipeDetails.cuttingAngle}</p>
                </div>
            </div>

        </div>
    )
}