import { useEffect, useState } from 'react';
import '../styles/Gallery.css';
import Location from './Location';
import { getApi } from '../utils/APIconf';

function Gallery() {

    const [data, setData] = useState([]);//tabl data

    useEffect(() => {
        getApi().then(items => setData(items)); //met les info return de getApi() dans setData
    }, [])

    return (
        <div className="Gallery_pt">
            <div className='thumb-box'>
                {data.map((location) =>
                    <Location key={location.title}
                    img = {location.cover}
                    title={location.title}
                    id={location.id}
                    />
                )
                }
            </div>
        </div>
    );
}
export default Gallery;