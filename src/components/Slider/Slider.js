import React from 'react';
import { Arrow } from '../Arrow';
import { dataHomes } from '../../assets/dataHomes';

import './Slider.css';

export const Slider = () => {
  const [value] = React.useState(0);

  return (
    <div className="homes__container-content">
      {dataHomes.slice(value, value + 4).map((data) => (
        <div className="homes__container-image" key={data.id}>
          <img src={data.imageUrl} alt="hotel-image" />
          <h3 className="homes__container-text homes__container-text--hotel">
            {data.name}
          </h3>
          <h4 className="homes__container-text homes__container-text--city">
            {' '}
            {data.city}, <br /> {data.country}
          </h4>
        </div>
      ))}
      <Arrow />
    </div>
  );
};
