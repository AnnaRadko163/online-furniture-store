import { Link } from 'react-router-dom'

import "./banner.sass"

import itemsBanner from './BannerData'


export default function Banner(props) {
    const item = (itemsBanner.filter(e => (e.id === +(props.id))))[0]

    return (
        <div className='banner'>
            <div className='container'>
                <div className= { props.reverse ? "banner__wrapper__reverse" : "banner__wrapper"}>
                    <div className='banner__text'>
                        <p className='banner__description'>{item.description}</p>
                        <p className='banner__specs'>{item.specs}</p>
                        <Link to="/categories"> <button className='banner__btn'>КУПИТЬ СЕЙЧАС</button></Link>    
                    </div>
                    <div className='banner__img'><img src={item.img} alt='foto'/></div>     
                </div>
            </div> 
        </div>
    )
} 
