'use client'

import './MoterosSearch.scss'
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from '../DatePicker';
import MenuPicker from '../MenuPicker/page'
import MoterosSearchButton from '../MoterosSearchButton/page';
// import { FormContext } from '../../store/FormContext';
import useForm from '@/hooks/useForm';

export const MoterosSearch = () => {
  // const { tripForm, handleTripForm } = useContext(FormContext);
  const { form: tripForm, handleForm: handleTripForm, resetForm: resetTripForm } = useForm({
    pickUpLoc: '',
    dropOffLoc: '',
    pickUpDate: '',
  });

  // const navigate = useNavigate();

  const handleSearchButton = () => {
    // navigate('/cab-list');
    console.log('Se activa handle del botón - HandleSearchButton');
  };

  const bikerBrand = [
    'Yamaha'
  ]

  const bikerModel = [
    'XTZ 250',
    'XTZ 150'
  ]

  const bikerYear = [
    2010,
    2012,
    2015,
    2017,
    2022,
    2023
  ]

  return (

    <div className="cab-search">

      <div className="search-form">

        <div className="search-inputs">

          <MenuPicker
            title="Marca de moto"
            inpName="pickUpLoc"
            placeholder="---------"
            handleInput={handleTripForm}
            value={tripForm?.pickUpLoc}
            listOfValues={bikerBrand}
          />

          <MenuPicker
            title="Modelo"
            inpName="dropOffLoc"
            placeholder="---------"
            handleInput={handleTripForm}
            value={
              tripForm?.dropOffLoc !== tripForm?.pickUpLoc
                ? tripForm?.dropOffLoc
                : ''
            }
            listOfValues={bikerModel}
          />

          <MenuPicker
            title="Año Modelo"
            inpName="dropOffLoc"
            placeholder="---------"
            handleInput={handleTripForm}
            listOfValues={bikerYear}
            value={
              tripForm?.dropOffLoc !== tripForm?.pickUpLoc
                ? tripForm?.dropOffLoc
                : ''
            }
          />

          {/* <DatePicker
            title="Pick up"
            inpName="pickUpDate"
            value={tripForm?.pickUpDate}
            handleInput={handleTripForm}
          /> */}

        </div>

        <MoterosSearchButton handleSearchButton={handleSearchButton} />

      </div>

    </div>
  );
};

export default MoterosSearch;