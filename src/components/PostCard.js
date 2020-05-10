import React from 'react'
import {Link} from 'react-router-dom'

function PostCard( {title, image, id, author, date, content} ) {

    // if we use a style variable , we define it at the bottom before export, but if we have a data that comes from props,then we have to define it in function before return

    const divStyle={
        width:"100%",
        height:"200px",
        backgroundImage: `url('${image}')`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        position:'relative',
        borderTopRightRadious:'2px',
        borderTopLeftRadious:'2px'
    }
    return (

        <div className="card">
        <Link to={"/"+id } >
            <div className="card-image"
                style={divStyle}
            >
            </div>
        </Link>

        <div className="card-info">
        <Link to = {"/"+id } >
            <div className="card-title">
                    {title}
            </div>
        </Link>
            <div className="card-author-section">
                    <p>{author }</p>
                    <p> {date} </p>
            </div>
        </div>
        </div>
    )
}

export default PostCard
