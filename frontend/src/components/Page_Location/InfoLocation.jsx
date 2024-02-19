import '../../styles/InfoLocation.css'
import Rating from './Rating';
import Tags from './Tags';

function InfoLocation({ title, name, hostPicture, location, tags, rating }) {

    return (
        <div className='InfoLocation_pt'>
            < div className='title_InfoLocation first_col'>
                <h1>{title}</h1>
                <h2>{location}</h2>
                <Tags tags={tags} />

            </div>
            <div className='info_InfoLocation second_col'>
                <div className='prop'>
                    <ul className='name_prop'>
                        <li>{name[0]}</li>
                        <li>{name[1]}</li>
                        </ul>
                    <img className='img_prop' src={hostPicture}></img>
                </div>
                <Rating rating={rating} />
            </div>
        </div>
    );

}


export default InfoLocation;