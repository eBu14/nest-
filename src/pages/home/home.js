import './index.css';
function Home() {
    return (
        <div className='homebody'>
            <div className='setEmail'>
                <h2>Instant collaborations for remote teams</h2>
                <div className='spanText'>All in one for your remote team chats,
                    collaboration and track projects</div>
                <div className='emailInput'>
                    <input placeholder='Email' />
                    <button>Get early access</button>
                </div>
            </div>
        </div>
    )
}
export default Home;