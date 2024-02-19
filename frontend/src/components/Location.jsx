function Location({ img, title, id }) {

    return (
        <div className='Location_pt'>
            <a href={'/location/' + id} className="ThumbLink">
                <img src={img} alt="Location-Image" className='Location-img'></img>
                <p className="ThumbTitle">{title}</p>
            </a>
        </div>
    )
}
export default Location;