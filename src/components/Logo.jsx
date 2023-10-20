import React from 'react';
import { AiFillGithub } from 'react-icons/ai';


const Logo = () => {


    return (
        <div className='items-center justify-center px-2 py-2'>
            <h1 className='flex text-center text-3xl font-semibold items-center'>
                <AiFillGithub />GitHub Profile Finder
            </h1>
        </div>
    )
}

export default Logo