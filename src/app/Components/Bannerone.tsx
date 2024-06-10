"use client"
import React, { useEffect, useState } from 'react'
import './Bannerone.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaEye } from "react-icons/fa6";


const Bannerone = () => {
    const [data, setData] = useState<any>(null)
    const percentage = 66;


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

        <div className='flex  justify-between items-center m-5 cursor-pointer'>
            {
                data && data.map((item: any, index: number) => {
                    return (
                        <div key={index} className="card">
                            <div className='flex justify-between items-center gap-2 m-2'>

                                <div className='bg-white shadow-md rounded-md w-[120px] h-[100px] mt-3 flex flex-col justify-center items-center gap-2'>
                                    <h1 className='font-bold text-black text-sm'>{item.name}</h1>
                                    <h1 className='text-sm font-semibold text-gray'>{item.value}</h1>
                                </div>
                                <div className='bg-white shadow-md rounded-md w-[120px] h-[100px] mt-3 flex flex-col justify-center items-center gap-2'>
                                    <h1 className='font-bold text-black text-sm' >Target</h1>
                                    <h1 className='text-sm font-semibold text-gray'>{item.goal}{item.goalUnit}</h1>
                                </div>
                            </div>
                            <div className='w-[50px] mx-auto'>
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            </div>
                            <div className='mx-auto flex justify-center items-center gap-2 bg-white rounded-md p-2 w-fit mt-3'>
                                <h1>Show Report </h1>
                                <FaEye />
                            </div>

                        </div>
                    )
                })
            }
        </div>

    )
}

export default Bannerone