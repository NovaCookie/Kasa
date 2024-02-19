import '../styles/Banner.css';
function Banner({txt, img}) {
    return (
        <div className='Banner_pt'>
            <img src={img} className='banner'></img>
            <p className='text'>{txt}</p>
        </div>
    )
}

export default Banner;