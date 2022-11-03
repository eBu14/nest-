import './rectangle.css'

const Rectangle = (props) => {
    const { name, about } = props
        return(
            <div className="rectangle">
                <div className="star">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
                <div className="about">
                    {about}
                </div>
                <div className="profile">
                    <div className="image">
                        <image/>
                    </div>
                    <div className="name">{name}</div>
                </div>
            </div>
        )
}
export default Rectangle