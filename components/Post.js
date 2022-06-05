/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { HeartIcon as HearIconFilled } from '@heroicons/react/solid'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { db } from '../firebase'
import Moment from 'react-moment'

export default function Post({img, userImg, caption, username, id}) {
    const { data: session } = useSession();
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(collection(db, "posts", id, "comments"), orderBy("timestamp","desc")), (snapshot) => {
                setComments(snapshot.docs)
            }
        )
    },[db, id])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "posts", id, "likes"),(snapshot) => setLikes(snapshot.docs))
    },[db])

    useEffect(() => {
        setHasLiked(
            likes.findIndex(like => like.id ===session?.user.uid) !== -1
        )
    },[likes])
    
    async function likedPost(){
        if(hasLiked){
            await deleteDoc(doc(db,"posts", id, "likes", session.user.uid),{
                username: session.user.username
            })
        } else {
            await setDoc(doc(db,"posts", id, "likes", session.user.uid),{
                username: session.user.username
            })

        }
    }

    async function sendComment(event){
        event.preventDefault();
        const commentToSend = comment;
        setComment("")
        await addDoc(collection(db, "posts", id, "comments"),{
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })
    }

    

    return (
        <div className='bg-white my-7 border rounded-md'>
            <div className='flex items-center p-5'>
                <img className='h-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={username}/>
                <p className='font-bold flex-1'>{username}</p>
                <DotsHorizontalIcon className='h-5'/>
            </div>

            <img className='object-cover w-full-height' src={img} />

            {session && (
                <div className='flex justify-between px-4 pt-4'>
                    <div className=' flex space-x-4'>
                        {hasLiked ? (
                            <HearIconFilled className='btn text-rose-500' onClick={likedPost} />
                        ) : (
                            <HeartIcon className='btn' onClick={likedPost}/>
                        )}
                        <ChatIcon className='btn'/>
                    </div>
                    <BookmarkIcon className='btn'/>
                </div>
            )}

            <p className='p-5 truncate'>
                {likes.length > 0 && (
                    <p className='font-bold'>{likes.length} likes</p>
                )}
                <span className='font-bold mr-2'>
                    {username}
                </span>
                {caption}
            </p>

            {comments.length > 0 && (
                <div className='mx-10 max-h-24 overflow-y-scroll scrollbar-none'>
                    {comments.map(comment => (
                        <div className='flex items-center space-x-2 mb-2'>
                            <img src={comment.data().userImage} alt="user-img" className='h-7 rounded-full object-cover'/>
                            <p className='font-semibold '>{comment.data().username}</p>
                            <p className='flex-1 truncate'>{comment.data().comment}</p>
                            <Moment fromNow>
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {session && (
                <form className='flex items-center p-4'>
                    <EmojiHappyIcon className='h-7'/>
                    <input value={comment} onChange={(event) => setComment(event.target.value)} type='text' className='border-none flex-1 focus:ring-0' placeholder="Enter your comment"/>
                    <button onClick={sendComment} disabled={!comment.trim()} className='text-blue-400 font-bold disabled:text-blue-200' type='submit'>Post</button>
                </form>
            )}
        </div>
    )
}
