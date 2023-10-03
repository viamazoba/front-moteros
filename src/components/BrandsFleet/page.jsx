/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client'
import Slider from 'react-slick';
import './BrandsFleet.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const ArrowStyle = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

export const BrandsFleet = () => {
  const settings = {
    dots: false,
    centerMode: true,
    className: 'slider-container',
    centerPadding: '60px',
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    autoplay: true,
    nextArrow: <ArrowStyle />,
    prevArrow: <ArrowStyle />,
    responsive: [

      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          initialSlide: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className='container-brands'>
      <section className="container-brands__text-info">
        <h2>Marcas de Repuestos</h2>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias
          Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore Magnam
          Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam Veritatis Voluptate Voluptatem!
        </p>
      </section>
      <div className="container__limit">
        <div className="brand__slider">
          <Slider {...settings}>
            <div>
              <Image className="brand" src='/logo_yamaha.svg' alt="Logo Yamaha" width={90} height={30}/>
            </div>
            <div>
              <Image className="brand" src='/logo_suzuki.svg' alt="Logo Suzuki" width={90} height={30}/>
            </div>
            <div>
              <Image className="brand" src='/logo_honda.svg' alt="Logo Honda" width={70} height={30}/>
            </div>
            <div>
              <Image className="brand" src='/logo_auteco.svg' alt="Logo Auteco" width={90} height={30}/>
            </div>
            <div>
              <Image className="brand" src='/logo_big_kawasaki.svg' alt="Logo Kawasaki" width={60} height={50}/>
            </div>
            <div>
              <Image className="brand" src='/logo_ktm.svg' alt="Logo KTM" width={60} height={50}/>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default BrandsFleet;