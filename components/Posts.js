import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "prastowoadi",
            userImg: "/img/avatar.png",
            img: "/img/bg1.jpg",
            caption: "Thanks for support"
        },
        {
            id: "2",
            username: "prastowadin",
            userImg: "/img/avatar.png",
            img: "/img/bg2.jpg",
            caption: "Thanks for everything"
        }
    ]
  return (
    <div>
        {posts.map(post =>(
            <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}
