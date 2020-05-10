import React, { useContext } from 'react'
import {BlogContext}  from "../App";
import PostCard from './PostCard'



function BlogList() {

    const posts = useContext(BlogContext)
    console.log('posts BlogList with Hooks : ' , posts)

    let postList = posts.map( item => <PostCard  key={item.id} {...item} /> )
        // <PostCard
        //     key={item.id}
        //     title={item.title}
        //     image={item.image}
        //     author={item.date}
        //     date={item.date}
        // />


    return (
        <div className="posts">
            <div className="container">
                <h2>Posts</h2>
                <div className="posts-grid-container">
                    {postList}
                </div>
            </div>
        </div>
    )
}

export default BlogList
