import './card.css'
function Card(props) {
    const { image, tags, text, user , profile} = props

    return (
        <div className='card'>
            <img className='image' src={image} />
            <div>
                <div className="tags">{tags}</div>
                <div className="text">{text}</div>

            </div>
            <div className='username'>
                <img className='ProfilePicture' src={profile}/>
                <div className="userFirstname">{user}</div>
            </div>
            
        </div>
    )
}
export default Card;