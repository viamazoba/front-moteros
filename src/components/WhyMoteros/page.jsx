/* eslint-disable arrow-body-style */
import './WhyMoteros.scss'
import Image from 'next/image';

export const WhyMoteros = () => (
  <div>
    <div className="section__limit">
      <section className="container__card_why">
        <span>SOMOS UNA FAMILIA</span>
        <h2>Bienvenido a Moteros</h2>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias
          Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore Magnam
          Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam Veritatis Voluptate Voluptatem!
        </p>
      </section>

      <section className="container__icons">

        <div className="card">
          <Image src='/repuestos.svg' alt="Repuestos" width={40} height={40} />
          <h3>Repuestos</h3>
          <p>Encuentra respuestos de todas las marcas y modelos de motos</p>
        </div>

        <div className="card">
          <Image src='/marca.svg' alt="Marcas" width={40} height={40}/>
          <h3>Marcas</h3>
          <p>Somos distribuidores de las principales marcas de repuestos del país</p>
        </div>

        <div className="card">
          <Image src='/taller.svg' alt="Taller" width={40} height={40}/>
          <h3>Talleres</h3>
          <p>Contamos con información detalla de talleres certificados en todo el país</p>
        </div>

        <div className="card">
          <Image src='/precio.svg' alt="Precio" width={40} height={40}/>
          <h3>Precios</h3>
          <p>Encuestra los precios más competitivos del marcado en repuestos de calidad</p>
        </div>

      </section>
    </div>
  </div>
);

export default WhyMoteros;