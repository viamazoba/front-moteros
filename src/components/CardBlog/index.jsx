/* eslint-disable react/button-has-type */
import React from 'react';
import Image from 'next/image';
import './CardBlog.scss';

export const CardBlog = () => {
  const informationBlog = [
    {
      id: 1,
      day: '01',
      month: 'JAN',
      author: 'Carlos Hernández',
      title: 'Lorem Ipsum is simply the of the printing and dummy text of typesetting..',
      content: 'Lorem Ipsum is simply dummy since..',
      image: '/modern_workshop.png',
    },
    {
      id: 2,
      day: '24',
      month: 'FEB',
      author: 'Camilo Murillo',
      title: 'Lorem Ipsum is simply the of the printing and dummy text of typesetting..',
      content: 'Lorem Ipsum is simply dummy since..',
      image: '/driver.png',
    },
    {
      id: 3,
      day: '27',
      month: 'AUG',
      author: 'Catalina Niño',
      title: 'Lorem Ipsum is simply the of the printing and dummy text of typesetting..',
      content: 'Lorem Ipsum is simply dummy since..',
      image: '/classic.png',
    },
  ];

  return (
    <div className="main__blogs">

      {informationBlog.map((information) => {
        return (
          <div className="container-blog" key={information.id}>
            <div className="container-blog__image-section">
              <div className="container-blog__date">
                <p>{information.day}</p>
                <p>{information.month}</p>
              </div>
              <div className="container-blog__image">
                <Image src={information.image} alt="person in lake" width={200} height={200} className='image'/>
              </div>
            </div>
            <div className="container-blog__text-section">
              <p>
                Posteado Por:
                {' '}
                {information.author}
              </p>
              <h3>{information.title}</h3>
              <p>{information.content}</p>
              <button>LEER MÁS</button>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default CardBlog;