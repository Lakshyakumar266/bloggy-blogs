import React, { useEffect, useState } from 'react'

function Blogpost() {
    const [Post, setPost] = useState([])

    useEffect(() => {
        const postSlug = window.location.pathname.split('/')[2]
        const postNo = window.location.pathname.split('/')[3]

        const headers = {
            'Content-Type': 'application/json', body: {
                "private-server-key": "MY_SERVER_PRIATE_KEY"
            }
        }
        fetch(`/bloggyblogs/MY_PUBLIC_SERVER_KEY/blog/${postNo}`, { headers })
        .then(response => response.json())
        .then((data) => {
            setPost(data['value-data'])
        })
        .catch((e) => console.log(e))

    }, [])

    return (<>
    <div className='container my-4'>
        <h3>{Post['blogtitle']}</h3>
        <img className='container' src={Post['blogimg']} alt={Post['blogimg']} />
        <div className='my-2'>{Post['blogdesc']}</div>
    </div>
        </>)
}

export default Blogpost