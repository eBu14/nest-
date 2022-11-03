import './index.css'
import Rectangle from '../components/rectange';
const Data = [
    {
        about:"Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
        name:"Amy Klassen"
    },
    {
        about:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        name:"Jane Cooper"
    },
    {
        about:"Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        name:"Eleanor Pena"
    },
    {
        about:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        name:"Amy Klassen"
    },
]
function About() {
    return(
        <div className="About">
            <div className='title'>
                <h1>What people say about us</h1>
            </div>
            <div className='widgets'>
                {Data.map((e) =><Rectangle about={e.about} name={e.name}/>)}
            </div>
        </div>
    )
}
export default About;