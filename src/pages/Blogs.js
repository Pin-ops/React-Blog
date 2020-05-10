import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BlogContext } from '../App'




function Blogs( props ) {

    // const {id} = props.match.params  old version

    const { id } = useParams()
    console.log(id)
    console.log('typeof(id) :' , typeof(id))

    const data = useContext(BlogContext)

    const blogDetails = data.filter( item => item.id === id).map(item =>

            <div key={item.id}>
                <div className="post-image"
                    style={{
                        width:"100%",
                        height:"70vh",
                        backgroundImage: `url('${item.image}')`,
                        backgroundPosition:'center',
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        position:'relative',
                        borderTopRightRadious:'2px',
                        borderTopLeftRadious:'2px'
                    }}
                >
                </div>
                <div className="post-content">
                    <h2> {item.title} </h2>
                    <p> {item.content} </p>
                </div>
            </div>

    )

    return (
        <div>
            {
                blogDetails
            }
        </div>
    )
}

export default Blogs
