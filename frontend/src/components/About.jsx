import '../styles/About.css';
import img from '../assets/images/IMG2.png'
import Collapse from '../components/Collapse'
import about_data from '../data/About.json'
import Banner from './Banner';


function About() {
    return (
        <div className='About_pt'>
            <Banner img={img}/>
            <div className='about_div_collapse'>
                {about_data.map((about_data, index) => (
                    <div className='about_collapse'>
                        <Collapse key={index} titre={about_data.title} information={about_data.description} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default About;