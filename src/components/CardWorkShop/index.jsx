import React from 'react';
import './CardWorkShop.scss'
import Image from 'next/image';
// import TitleHome from '../TitleHome';

export const CardWorkShop= () => {
  const cardsInformation = [
    {
      id: 1,
      title: 'Explora',
      image: '/imageMain_booking_1.png',
    },
    {
      id: 2,
      title: 'Cotiza',
      image: '/imageMain_booking_2.png',
    },
    {
      id: 3,
      title: 'Informate',
      image: '/imageMain_booking_3.png',
    },
    {
      id: 4,
      title: 'Agenda',
      image: '/calendario.png',
    },
  ];

  return (
    <div className='main__information'>

        <div className="container-information">
        <section className="container-information_text">
            <h2>Contacta Talleres</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            alias aperiam at, aut commodi corporis dolorum ducimus labore magnam
            mollitia natus porro possimus quae sit tenetur veniam veritatis
            voluptate voluptatem!
            </p>
        </section>
        <div className="container-information__images">
            {cardsInformation.map((information) => {
            return (
                <div className="container-information__image" key={information.id}>
                <Image src={information.image} alt={information.title} width={50} height={50}/>
                <p>{information.title}</p>
                </div>
            );
            })}
        </div>
        </div>
    </div>
  );
};

export default CardWorkShop;