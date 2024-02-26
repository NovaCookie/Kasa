import '../styles/Banner.css';
function Banner({txt, img}) {
    return (
        <div className='Banner_pt'>
            <img src={img} className='banner' alt='img-banner'></img>
            <p className='text' data-testid="p-banner">{txt}</p>
        </div>
    )
}

export default Banner;