import Slideshow from "./Slideshow.jsx";
import Collapse from "../Collapse.jsx";
import InfoLocation from "./InfoLocation";
import { getApiWithId } from '../../utils/APIconf';
import { useEffect, useState } from 'react';
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import '../../styles/PageLocation.css';

function PageLocation() {

  let { id } = useParams()
  const navigate = useNavigate();
  const [info, setInfo] = useState();

  useEffect(() => {

    getApiWithId(id).then(location =>
      !location ?
        navigate("/location") : setInfo(location))

  }, [])

  return (
    <>
      {
        (info != null) ?
          <div className="PageLocation_pt">
            < Slideshow pictures={info.pictures} />
            <div>
              <InfoLocation title={info.title} name={(info.host.name).split(" ")} hostPicture={info.host.picture}
                location={info.location} tags={info.tags} rating={info.rating} />
              <div className="Collapses_PageLocation_pt">
                < Collapse information={info.description} titre="Description" />
                <div className="block"></div>
                < Collapse information={info.equipments} titre="Équipements" />
              </div>
            </div>

          </div>
          : null
      }
    </>
  )
}

export default PageLocation;