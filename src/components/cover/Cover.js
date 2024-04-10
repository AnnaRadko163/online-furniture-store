import "./cover.sass"
import Img1 from "../../img/header/home-img-1.jpg"
import Img2 from "../../img/header/home-img-2.jpg"
import Img3 from "../../img/header/home-img-3.jpg"
import Img4 from "../../img/header/home-img-4.jpg"


export default function Cover() {
  return (
    <>
      <div className="cover">
        <div className="container">
          <div className="cover__wrapper">
            <div className="cover-item grid-one">
              <>
                <div className="cover-item__overlay"></div>
                <img src={Img1} alt="img1" />
                <p className="cover-item__description">Живите комфортно</p>
              </>
            </div>
            <div className="cover-item grid-two">
              <>
                <div  className="cover-item__overlay"></div>
                <img src={Img2} alt="img2" />
                <p className="cover-item__description">Гостиная</p>
              </>
            </div>
            <div className="cover-item grid-four">
              <>
                <div className="cover-item__overlay"></div>
                <img src={Img3} alt="img3" />
                <p className="cover-item__description">Кухня</p>
              </>
            </div>
            <div className="cover-item grid-four-low">
              <>
                <div className="cover-item__overlay"></div>
                <img src={Img4} alt="img4" />
                <p className="cover-item__description">Спальня</p>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
