import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Card from "../components/card";
import { instance } from "../instance/instance";
import './postpage.css' 
function PostPage() {
    const { postId } = useParams();
    const [data, setData] = useState({ owner: {} });
    const [comment, setComment] = useState([]);
    const [value, setValue] = useState('')

    const getPostData = async () => {
        const res = await instance.get(`/post/${postId}`)
        setData(res.data)
    }

    // const getPostComment = async () => {
    //     const res = await instance.get(`/post/${postId}/comment`)
    //     setComment(res.data);
    // }
    const postComment = () => {
        setComment([...comment, value])
        setValue('')
    }
    useEffect(() => {
        getPostData()
        // getPostComment()
        console.log(data)
    },[])
    return (
        <div className="postpage">
            
            <div>
                <Card image={data.image} tags={data.tags} text={data.text} user={data.owner.firstName} profile={data.owner.picture}/>
            </div>
            <div className="inputcomment">
                <input value={value} onChange={(e) => setValue(e.target.value)}/>
                <button onClick={postComment}>comment</button>
            </div>
            <div className="comments">
                {comment.map((el) => {
                    return <>
                        <div>{el}</div>
                    </>
                })}
            </div>
         
        </div>
    
    )
}
export default PostPage