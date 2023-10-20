import React, { useEffect, useRef, useState } from 'react'
import UsersCard from '../components/UsersCard';
import Loading from '../components/Loading';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(null);
    let BaseURL = "https://api.github.com/users";
    const user = useRef('');

    async function AllUsers(){
        if(user.current.value === ""){
            setLoading(true)
            const res = await fetch(BaseURL);
            const data = await res.json();
            setUsers(data);
            setLoading(null);
        }
        
    }

    async function FindUser(){
        setLoading(true);
        if(user.current.value !== ''){
            setUsers("");
            const res = await fetch(BaseURL + '/' + user.current.value);
            const data = await res.json();
            setUsers(() => [data])
            user.current.value = "";
        }else{
            AllUsers();
        }
        setLoading(null)
    }

    useEffect(() => {
        AllUsers();
    }, [setUsers]);

    return (
        <div>
            <div className='flex justify-center items-center h-11 my-5'>
                <input 
                    type="text" 
                    placeholder='Search GitHub user' 
                    className='h-full md:w-1/3 w-2/3 font-semibold outline-none px-2 text-purple-500' 
                    ref={user}
                />
                <button onClick={FindUser} type='submit' className='bg-purple-500 font-semibold text-white h-full px-4'>
                    Search
                </button>
            </div>
            {loading ? <Loading /> : <UsersCard users={users} />}
        </div>
    )
}

export default Users