/* eslint-disable arrow-body-style */
import './BannerHome.scss';
import MoterosSearch from '../MoterosSearch/page';
// import CabSearch from '../CabSearch';

const BannerHome = () => (
  <div className="banner-container">

    <div className="banner-content">
      <h1>Compra Tus Repuestos</h1>
      <h3>Compra a precios justos y favorables</h3>
      <div className="cab-search-container">
        <MoterosSearch />
      </div>
    </div>
  </div>
);

export default BannerHome;