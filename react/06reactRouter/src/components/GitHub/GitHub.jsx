import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect( () => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res => res.json())
    //     .then(data => setdata(data))
    // }, [])

    return (
        < div className='flex flex-col justify-center'>
            <div className='flex justify-center'>
                <img src={data.avatar_url} alt="profile github pic" width={300} />
            </div>
            <div className='flex justify-center bg-blue-700 text-white p-5 text-3xl'>
                GitHub Followers: {data.followers}
            </div>
        </div>
    )
}

export default GitHub

export const GithubInfoLoader = async() => {
    const res = await fetch("https://api.github.com/users/hiteshchoudhary")
    return res.json()
}