import './index.css'
function Info() {
    return(
        <div className='info'>
            <div className='texts'>
                <div className='line1'>
                    <h1>team.</h1>
                    <div><i class="bi bi-instagram"></i><div>Insatgram</div></div>
                    <div><i class="bi bi-facebook"></i><div>Facebook</div></div>
                    <div><i class="bi bi-twitter"></i><div>Twitter</div></div>
                </div>
                <div className='line2'>
                    <div className='line2head'>Use Cases</div>
                    <div className='line2Menu'>
                        <div>UI Design</div>
                        <div>UX Design</div>
                        <div>Prototyping</div>
                    </div>
                </div>
                <div className='line3'>
                    <div>Explore</div>
                    <div className='line3menu'>
                        <div>Figma</div>
                        <div>Customers</div>
                        <div>Why I Love Figma</div>
                    </div>
                </div>
                <div className='line4'>
                    <div>Resources</div>
                    <div className='line4menu'>
                        <div>Community Resources Hub</div>
                        <div>Support</div>
                        <div>Education</div>
                    </div>
                </div>
                <div className='line5'>
                    <div>Subscribe to our newsletter</div>
                    <button>Email<i class="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}
export default Info;