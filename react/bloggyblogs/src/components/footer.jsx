import React from 'react'
import {
    Link
} from "react-router-dom";

function footer() {
    return (
        <div>
            <div className="py-4 text-center">
                <Link role="button" className="btn btn-primary m-2" to="/" >Home</Link>
                <Link role="button" className="btn btn-danger m-2" to="/about" >About Us</Link>
                <Link role="button" className="btn btn-success m-2" to="/contact">Contact Us</Link>
            </div>

            <hr className="m-0" />

            <div className="text-center py-4 align-items-center">
                <p>Follow BloggyBlogs on social media</p>
                <a href="/" className="btn btn-danger m-1" role="button">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="/" className="btn bg-primary m-1 text-light" role="button">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="btn bg-info m-1 text-light" role="button">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="btn bg-dark m-1 text-light" role="button">
                    <i className="fab fa-github"></i>
                </a>
            </div>

            <div className="text-center text-muted p-3" style={{ backgroundColor: `rgba(0, 0, 0, 0.2)` }}>
                © 2020 Copyright: &nbsp;
                <a className="text-dark text-decoration-none" href="/">CodingProGamer.in</a>
            </div>
        </div>
    )
}

export default footer
