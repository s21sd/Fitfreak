"use client";
import React from 'react';
import './workoutPage.css';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
const Page = () => {
    const params = useParams()
    console.log(params.type)
    const [workouts, setWorkouts] = React.useState([]);
    const getWorkouts = async () => {
        let data: any = [
            {
                type: 'Chest',
                imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 30,
                exercises: [
                    {
                        exercise: 'Flat Bench Press',
                        videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'A compound exercise targeting the chest muscles.'
                    },
                    {
                        exercise: 'Incline Bench Press',
                        videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Targets the upper part of the chest.'

                    },
                    {
                        exercise: 'Decline Bench Press',
                        videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Focuses on the lower chest muscles.'

                    }
                ],
            },
            {
                type: 'Abs',
                imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 90,
                exercises: [
                    {
                        exercise: 'Standing Abs Rotation Stretch',
                        videoUrl: 'https://gymvisual.com/img/p/9/3/5/6/9356.gif',
                        sets: 3,
                        reps: 15,
                        rest: 60,
                        description: 'Targets the oblique muscles.'
                    },
                    {
                        exercise: 'Standing Abs Rotation Stretch (female)',
                        videoUrl: 'https://gymvisual.com/img/p/2/2/9/0/7/22907.gif',
                        sets: 3,
                        reps: 15,
                        rest: 60,
                        description: 'Another variation for targeting obliques.'

                    },
                    {
                        exercise: 'Standing Abs Rotation Stretch (female)',
                        videoUrl: 'https://gymvisual.com/img/p/2/2/9/0/7/22907.gif',
                        sets: 3,
                        reps: 15,
                        rest: 60,
                        description: 'Targets the oblique muscles.'

                    },
                ],


            },
            {
                type: 'Shoulder',
                imageUrl: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 40,
                exercises: [
                    {
                        exercise: 'Resistance Band Overhead Shoulder Press',
                        videoUrl: 'https://gymvisual.com/img/p/3/4/3/7/0/34370.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Targets the shoulder muscles.'
                    },
                    {
                        exercise: 'Resistance Band Standing Single Arm Lateral Raise',
                        videoUrl: 'https://gymvisual.com/img/p/3/4/3/6/6/34366.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Works the lateral deltoids.'

                    },
                    {
                        exercise: 'Resistance Band Pass Through',
                        videoUrl: 'https://gymvisual.com/img/p/3/4/3/7/2/34372.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Targets the shoulder muscles.'

                    }
                ],
            },
            {
                type: 'Back',
                imageUrl: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFjayUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 70,
                exercises: [
                    {
                        exercise: 'Barbell Back Wide Shrug',
                        videoUrl: 'https://gymvisual.com/img/p/2/1/9/4/4/21944.gif',
                        sets: 4,
                        reps: 10,
                        rest: 90,
                        description: 'Targets the upper back and traps.'
                    },
                    {
                        exercise: 'Smith Back Wide Shrug',
                        videoUrl: 'https://gymvisual.com/img/p/2/1/9/4/5/21945.gif',
                        sets: 4,
                        reps: 10,
                        rest: 90,
                        description: 'Similar to barbell shrugs but on a Smith machine.'

                    },
                    {
                        exercise: 'Seated Lower Back Stretch',
                        videoUrl: 'https://gymvisual.com/img/p/2/1/5/7/7/21577.gif',
                        sets: 4,
                        reps: 10,
                        rest: 90,
                        description: 'Targets the Lower back and traps.'

                    }
                ],
            },
            {
                type: 'Biceps',
                imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 50,
                exercises: [
                    {
                        exercise: 'Dumbbell Goblet Squat and Biceps Curl',
                        videoUrl: 'https://gymvisual.com/img/p/2/0/3/0/7/20307.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Combines a squat and biceps curl.'
                    },
                    {
                        exercise: 'Dumbbell Standing Biceps Curl to Shoulder Press',
                        videoUrl: 'https://gymvisual.com/img/p/2/0/9/5/4/20954.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Combines a biceps curl and shoulder press.'

                    },
                    {
                        exercise: 'Dumbbell Incline Biceps Curl',
                        videoUrl: 'https://gymvisual.com/img/p/2/0/3/7/1/20371.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Combines a Incline and biceps curl.'

                    }
                ],
            },
            {
                type: 'Triceps',
                imageUrl: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpY2Vwc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 60,
                exercises: [
                    {
                        exercise: 'Triceps Dip on High Parallel Bars',
                        videoUrl: 'https://gymvisual.com/img/p/3/3/9/0/3/33903.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Works the triceps muscles.'
                    },
                    {
                        exercise: 'Dumbbell Seated Triceps Extension',
                        videoUrl: 'https://gymvisual.com/img/p/3/3/7/2/4/33724.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Isolates the triceps.'

                    },
                    {
                        exercise: 'Bodyweight Triceps Extension from Plank Position ',
                        videoUrl: 'https://gymvisual.com/img/p/3/1/6/4/9/31649.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Isolates the triceps with Bodyweight.'

                    }
                ],
            },
            {
                type: 'Legs',
                imageUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 40,
                exercises: [
                    {
                        exercise: 'Bodyweight Lying Legs Curl',
                        videoUrl: 'https://gymvisual.com/img/p/2/7/6/5/2/27652.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Focuses on the quads and glutes.'
                    },
                    {
                        exercise: 'Glute Bridge Two Legs on Bench',
                        videoUrl: 'https://gymvisual.com/img/p/3/2/6/1/1/32611.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Isolates the quadriceps.'

                    },
                    {
                        exercise: 'Elevated Two Legs Hip Thrust',
                        videoUrl: 'https://gymvisual.com/img/p/3/2/6/3/3/32633.gif',
                        sets: 4,
                        reps: 12,
                        rest: 90,
                        description: 'Focuses on the Legs and glutes.'

                    }
                ],
            },
            {
                type: 'Cardio',
                imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                durationInMin: 20,
                exercises: [
                    {
                        exercise: 'Jack Burpee',
                        videoUrl: 'https://gymvisual.com/img/p/3/3/1/3/6/33136.gif',
                        sets: 3,
                        reps: 20,
                        rest: 60,
                        description: 'High-intensity cardiovascular exercise.'
                    },
                    {
                        exercise: 'High Knee Jump Rope ',
                        videoUrl: 'https://gymvisual.com/img/p/3/4/8/0/9/34809.gif',
                        sets: 3,
                        reps: 20,
                        rest: 60,
                        description: 'An effective cardio workout.'

                    },
                    {
                        exercise: 'Quick Feet ',
                        videoUrl: 'https://gymvisual.com/img/p/2/6/9/9/6/26996.gif',
                        sets: 3,
                        reps: 20,
                        rest: 60,
                        description: 'High-intensity Quick exercise.'

                    }
                ],
            },
            {
                type: 'Forearms',
                imageUrl: 'https://images.unsplash.com/photo-1591940742878-13aba4b7a34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZWFybXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 25,
                exercises: [
                    {
                        exercise: 'Chest Bench Press - Forearms',
                        videoUrl: 'https://gymvisual.com/img/p/1/0/4/1/4/10414.gif',
                        sets: 4,
                        reps: 15,
                        rest: 90,
                        description: 'Isolates the forearm flexors.'
                    },
                    {
                        exercise: 'Wrist Circles',
                        videoUrl: 'https://gymvisual.com/img/p/2/1/5/9/5/21595.gif',
                        sets: 4,
                        reps: 15,
                        rest: 90,
                        description: 'Targets the forearm extensors.'

                    },
                    {
                        exercise: 'Lying Single Legs Reverse Biceps Curl with Towel',
                        videoUrl: 'https://gymvisual.com/img/p/2/1/5/1/0/21510.gif',
                        sets: 4,
                        reps: 15,
                        rest: 90,
                        description: 'Targets the forearm flexors.'

                    }
                ],
            }
        ]

        setWorkouts(data);
    };
    React.useEffect(() => {
        getWorkouts();
    }, []);

    return (
        <div className='workout bg-[#ffc20e]'>
            {workouts.map((workout, index) => (

                params.type === workout.type && <div key={index} className='workout__section'>
                    <h1 className='text-white bg-black w-fit p-3 rounded-full mx-auto text-3xl font-bold'>{workout.type} Day</h1>
                    <div className='workout__exercises'>
                        {
                            workout.exercises.map((exercise: any, exIndex: number) => (

                                <div
                                    key={exIndex}
                                    className={
                                        exIndex % 2 === 0
                                            ? 'workout__exercise'
                                            : 'workout__exercise workout__exercise--reverse'
                                    }
                                >
                                    <h1>{exIndex + 1}</h1>
                                    <div className='workout__exercise__image'>
                                        <img src={exercise.videoUrl} alt={exercise.exercise} />
                                    </div>
                                    <div className='workout__exercise__content'>
                                        <h2>{exercise.exercise}</h2>
                                        <span className='text-white bg-black w-fit p-2 rounded-full text-xl font-medium' >{exercise.sets} sets X {exercise.reps} reps</span>
                                        <p>{exercise.description}</p>
                                    </div>
                                </div>


                            ))
                        }
                    </div>
                </div>

            ))}
        </div>
    );
};

export default Page;
