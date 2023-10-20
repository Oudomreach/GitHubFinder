import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

const UserInfo = () => {

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  let BaseURL = "https://api.github.com/users";

  async function GetUserInfo(){
    const res = await fetch(BaseURL + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }

  useEffect(() => {
    GetUserInfo();
    console.log(user)
  }, [pathname])



  return (
    <div className='py-5'>
      <button onClick={() => navigate('/') } className='px-5 py-1 font-medium mx-1 my-4 bg-purple-500 text-white rounded'>
        BACK
      </button>
      {
        user && user?.map((uinfo, i) => {
          return (
            <div key={i} className='flex justify-center md:flex-row flex-col gap-10'>
              <img src={uinfo.avatar_url} className='w-[350px] border-4 border-purple-500 md:mx-0 mx-auto' />
              <div className='text-lg px-3'>
                <h1 className='text-3xl pb-4 italic font-semibold'>{uinfo?.name}</h1>
                <h1>
                  <span className='text-purple-500'>Name </span> : {uinfo.login}
                  <br />
                  <span className='text-purple-500'>Followers </span> : {uinfo.followers}
                  <br />
                  <span className='text-purple-500'>Following </span> : {uinfo.following}
                  <br />
                  <span className='text-purple-500'>Public Repo </span> : {uinfo.public_repos}
                  <br />
                  <span className='text-purple-500'>Join </span> : {new Date(uinfo?.created_at).toLocaleDateString()}
                </h1>
                <a href={uinfo.html_url} target='_blank' className='bg-purple-600 text-white rounded font-semibold cursor-pointer px-4 py-1 my-3 tracking-wide'>View GitHub</a>
              </div>
            </div>
          )
        })
      }
      {/* <div className='flex border-b pb-4 gap-6 mt-[10%] mb-6 justify-center md:text-xl'>
        <button>Repositories</button>
        <button>Activity</button>
        <button></button>
      </div> */}
    </div>
  )
}

export default UserInfo