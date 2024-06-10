"use client"
import React, { useEffect, useState } from 'react'

const Bannerone = () => {
    const [data, setData] = useState<any>(null)
    const getData = async () => {
        let temp = [
            {
                "name": "Calories Intake",
                "value": 2000,
                "unit": "kcal",
                "goal": 2500,
                "goalUnit": "kcal"
            },
            {
                "name": "Sleep",
                "value": 8,
                "unit": "hrs",
                "goal": 8,
                "goalUnit": "hrs"
            },
            {
                "name": "Steps",
                "value": 50,
                "unit": "steps",
                "goal": 10000,
                "goalUnit": "steps"
            },
            {
                "name": "Water",
                "value": 2000,
                "unit": "ml",
                "goal": 3000,
                "goalUnit": "ml"
            },
            {
                "name": "Weight",
                "value": 75,
                "unit": "kg",
                "goal": 70,
                "goalUnit": "kg"
            },
            {
                "name": "Workout",
                "value": 2,
                "unit": "days",
                "goal": 6,
                "goalUnit": "days"
            }
        ]
        setData(temp)
        console.log(temp)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>Bannerone</div>
    )
}

export default Bannerone