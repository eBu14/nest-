import { useNavigate } from "react-router-dom"
import "./dogPost.css"
const DogPost = (props) => {
    const { tags , text , firstName , lastName , publishDate, poster, profile , id} = props
        const navigation = useNavigate()
        const onClickPost = () => {
            navigation(`/post/${id}`)
        }
    return(
        <div className="DogPost" onClick={onClickPost}>
            <div className="post">
                {/* <div style={{background: `url(${poster})`}} className="dogimage"></div> */}
                <img src={poster} className="doginame"/>
                <div className="tagsAbout">{tags}</div>
                <div className="text">{text}</div>
            </div>
            <div className="user">
                {/* <div style={{background: `url(${profile})`}} className="userimage"></div> */}
                <img src={profile}  className="ProfilePicture" />
                <div className="username">
                    <div className="name">
                        <div>{firstName}</div>
                        <div>{lastName}</div>
                    </div>
                    <div>|</div>
                    <div className="publishDate">{publishDate.slice(0,10)}</div>
                </div>
            </div>
        </div>
    )
}
export default DogPost