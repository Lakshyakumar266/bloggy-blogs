import React from 'react'
import logo from '../logo.svg'

import {
    Link
  } from "react-router-dom";

function nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" height="30" className="d-inline-block" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-normal text-muted">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/contact">Contact Us</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav d-flex flex-row">

                            <li className="nav-item me-3 me-lg-0">
                                <Link className="nav-link" to="/">
                                    <i className="fab fa-youtube"></i>
                                </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link className="nav-link" to="/">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link className="nav-link" to="/" >
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link className="nav-link" to="/">
                                    <i className="fab fa-github"></i>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default nav
