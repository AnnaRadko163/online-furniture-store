import "./cover.sass"
import Img1 from "../../img/header/home-img-1.jpg"
import Img2 from "../../img/header/home-img-2.jpg"
import Img3 from "../../img/header/home-img-3.jpg"
import Img4 from "../../img/header/home-img-4.jpg"
import { Link } from 'react-router-dom'



export default function Cover() {
  const imgData = [
    {
      id: 1,
      src:Img1,
      description: 'Живите комфортно',
      class: "grid-one",
    },
    {
      id: 2,
      src:Img2,
      description: 'Гостиная',
      class: "grid-two",
    },
    {
      id: 3,
      src:Img3,
      description: 'Кухня',
      class: "grid-four",
    },
    {
      id: 4,
      src:Img4,
      description: 'Спальня',
      class: "grid-four-low",
    }

  ]

  return (
    <>
      <div className="cover">
        <div className="container">
          <div className="cover__wrapper">
            {imgData.map(e => (
              <div key={e.id} className={"cover-item " + e.class}>
                <Link to="/categories">
                  <div className="cover-item__overlay"></div>
                  <img src={e.src} alt="foto" />
                  <p className="cover-item__description">e.description</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
