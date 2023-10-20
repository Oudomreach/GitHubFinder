import React from 'react'
import { Link } from 'react-router-dom';

const UsersCard = ({users}) => {
    return (
        <div className='flex gap-5 flex-wrap justify-center py-5'>
            {users &&
                users.map((user,idx) => {
                    return (
                        user?.login && (
                            <div key={idx} className='flex w-[200px] border border-white bg-purple-500 p-3 flex-col items-center'>
                                <img src={user?.avatar_url}  className='w-24 border-4 rounded-full border-white mb-4'/>
                                <p className='flex justify-evenly text-white'>
                                    {/* Follower: {user.followers} Following: {user.following} */}
                                </p>
                                <h1 className='text-white text-xl'>{user?.login}</h1>
                                {/* <h1 className='text-white font-semibold italic'>{user.name}</h1> */}
                                <Link to={`${user?.login}`}>
                                    <span className='bg-white text-purple-500 my-3 font-semibold py-1 px-4 block tracking-wide cursor-pointer'>
                                        View
                                    </span>
                                </Link>
                                
                            </div>
                        )
                    )
                    
                })
            }
        </div>
    )
}

export default UsersCard;