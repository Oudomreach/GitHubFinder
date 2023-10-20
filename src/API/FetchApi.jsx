import React from 'react'

const FetchApi = () => {

    // const apiGet = () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then((response) => response.json)
    //     .then((json) => console.log(json))
    // }

    async function logMovies() {
        const response = await fetch("http://example.com/movies.json");
        const movies = await response.json();
        console.log(movies);
    }

    return (
        <div>
            My API <br/>
            <button onClick={logMovies} className='bg-orange-500 px-2 py-2 text-white'>Fetch API</button>
        </div>
    )
}

export default FetchApi