import React from 'react'
import { Link} from "react-router-dom";

function Navbar() {
    return (
        <div className = "nav">
            <div className="container">
                <Link to ="/">
                     <h2>React Blog</h2>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
