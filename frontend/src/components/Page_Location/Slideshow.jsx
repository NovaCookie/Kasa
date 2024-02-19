import '../../styles/Slideshow.css'
import arrow_right from '../../assets/images/arrow_right.png';
import arrow_left from '../../assets/images/arrow_left.png';
import { useEffect, useState } from 'react';


function Slideshow({ pictures }) {

    const [count, setCount] = useState(0);
    const [src, setSrc] = useState(pictures[0]);

    function handleCount(direction) {

        //Si count prend une valeur inférieur à 0 alors count prend le dernier élement du tableau
        if (direction === "left") {
            if (count === 0) {
                setCount(pictures.length - 1)
            } else {
                setCount(count - 1)
            }
        }
        //si count prend une valeur supérieur au dernier élément du tableau alors count prend le premier élemen du tableau
        else if (direction === "right") {
            if (count === pictures.length - 1) {
                setCount(0)
            } else {
                setCount(count + 1)
            }
        }
    }
    useEffect(() => {
        setSrc(pictures[count])
    }, [count]
    );
   

    return (
        <>
            <div className='Slideshow_pt'>
                <img className="banner-img" id="Img" src={src} alt=''></img>
                {pictures.length > 1 ? (
                    <>
                        <div className="arrow_left arrow " onClick={() => handleCount("left")}>
                            <img src={arrow_left} alt=''></img>
                        </div>
                        <div className="arrow_right arrow " onClick={() => handleCount("right")}>
                            <img src={arrow_right} alt=''></img>
                        </div>
                        <div className='compteur'>{count+1}/{pictures.length}</div>
                    </>
                ) : (null)}


            </div>
        </>
    );
}
export default Slideshow;