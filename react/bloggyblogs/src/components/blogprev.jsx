import React from 'react'
import {
    Link
} from "react-router-dom";

function Blogprev(props) {
    return (
        <>
            <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                    <div className="bg-image ripple" data-mdb-ripple-color="light">
                        <img src={props.blogimg} style={{ "width": "25rem", "height": "20rem" }} className="img-fluid" alt={props.blogimg} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.blogname}</h5>
                        <p className="card-text">
                            {props.blogshortdesc.slice(0,200)}...
                        </p>
                        <Link to={`blog/${props.blogurl}/${props.id}`} className="btn btn-primary">Read</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogprev
