import '../../styles/Tags.css'

function Tags({ tags }) {

    return (
        <div className='Tags_pt'>
            <ul className='ul_Tags'>
                {tags.map((tags, index) => (
                    <li key={index}>{tags}</li>
                ))}
            </ul>
        </div>
    );

}


export default Tags;