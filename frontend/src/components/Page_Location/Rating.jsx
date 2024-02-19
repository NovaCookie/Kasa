import '../../styles/Rating.css'
import vide from '../../assets/images/E_Vide.png'
import pleine from '../../assets/images/E_Pleine.png'

function Rating({ rating }) {


    const note = [1, 2, 3, 4, 5];
    return (
        <div className="Rating_pt">
            {note.map((score, index) =>
                rating >= score ? (
                    <img
                        key={index}
                        className="stars"
                        src={pleine}
                        alt="Etoile pleine"
                    />
                ) : (
                    <img
                        key={index}
                        src={vide}
                        className="stars"
                        alt="Etoile vide"
                    />
                )
            )}
        </div>
    );

}


export default Rating;