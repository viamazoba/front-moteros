/* eslint-disable arrow-body-style */
import './MenuPicker.scss';

export const MenuPicker = ({
  title, inpName, placeholder, modal, handleInput, value,
}) => {
  const modalStyle = modal ? 'modal' : '';
  const cities = [
    'Bogotá',
    'Medellín',
    'Cali',
    'Barranquilla',
    'Cartagena',
    'Bucaramanga',
    'Santa Marta',
    'Pereira',
    'Manizales',
    'Cúcuta',
  ];
  return (
    <div className={`container-input ${modalStyle}`}>
      <label htmlFor={inpName}>
        <p>{title}</p>
        <select
          id={inpName}
          placeholder={placeholder}
          name={inpName}
          onChange={(e) => handleInput(e)}
          value={value}
          required
        >
          <option value="" disabled>{placeholder}</option>
          {cities.map((city) => (<option key={city} value={city}>{city}</option>))}
        </select>
      </label>
    </div>
  );
};

export default MenuPicker;