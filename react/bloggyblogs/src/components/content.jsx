import React, { useState } from 'react'
import Blogprev from './blogprev'

import {
    Link
} from "react-router-dom";
import { useEffect } from 'react';

function Content(props) {
    const [Blogs, setBlogs] = useState([])
    useEffect(() => {
        props.setProgress(50)
        const headers = {
            'Content-Type': 'application/json', body: {
                "private-server-key": "MY_SERVER_PRIATE_KEY"
            }
        }
        fetch('/bloggyblogs/MY_PUBLIC_SERVER_KEY/blogs', { headers })
        .then(response => response.json())
        .then((data) => {
            setBlogs(data['value-data']);
        })
        
        props.setProgress(100);
    },[props])

    return (
        <>
            <div id="intro" className="p-5 text-center">
                <h2 className="mb-3 h2 text-muted">BloggyBlogs.in</h2>
                <p className="mb-3">Read the BloggyBlogs <b>Blogs</b> &amp; make your coding life eassy.</p>
                <a className="btn btn-primary m-2" href="#container" role="button">Start Reaing</a>
                <Link className="btn btn-success m-2" to="/contact"
                    role="button">Contact Us</Link>
            </div>

            <main className="my-5">
                <div className="container" id="container">
                    <section className="text-center">
                        <h4 className="mb-5"><strong>Latest posts</strong></h4>
                        <div className="row" id="row">
                            { Blogs.map((element, index) => (
                                <Blogprev key={index} blogname={element.blogtitle} blogimg={element.blogimg} blogshortdesc={element.blogshortdesc} blogurl={element.blogslug} id={element.sno} />
                            ))}

                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Content
