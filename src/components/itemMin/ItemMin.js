import { Link } from 'react-router-dom'

import "./itemMin.sass"


export default function Items( {id,description, img, price }) {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    function normalPrice(nbr) {
        return String(nbr).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
      };

    return (
        <div key={id} className='product'>
            <Link onClick={scrollToTop} to={`/categories/product/${id}`}>
                <div className='product__header'>
                    <img src={img} alt='foto'/>
                    </div>
                <div className='product__details'>
                    <p>{description}</p>
                    <p className='product__price'>{normalPrice(price)} ₽</p>
                </div>
            </Link>
        </div>
    )
}
