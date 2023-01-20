import React, { useState } from 'react';


const Join = () => {
    const [uerName,setUserName]=useState("");
    const [room,setRoom]=useState('')

    return (
        <div className='md:my-48 md:mx-48 '>
            
                <div className='mx-auto drop-shadow-2xl shadow-gray-500/100 w-full md:w-1/2 dark:dark-card-bg bg-black py-24 rounded px-12 to-transparent'>
                <h1 className='text-white pb-4 text-center '>Join Us</h1>
               
                <div  >
                <input className='w-full p-4 rounded mb-2 mx-auto' placeholder='Write Your Name' type="text" onChange={(event)=>setUserName(event.target.value)}/>
            </div>
            <div>
                <input className='w-full p-4 rounded mb-2 mx-auto' placeholder='Write Your Room Id' type="text" onChange={(event)=>setRoom(event.target.value)}/>
            </div>
           
                <button className='button text-xl bg-blue-600 hover:bg-white hover:text-blue-600'  type='submit'>Join Room</button>
            
                </div>
        </div>
    );
};

export default Join;