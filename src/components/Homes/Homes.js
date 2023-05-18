import React from 'react';
import { Container } from '../Container';
import { Subtitle } from '../Subtitle';

import './Homes.css';
import { Slider } from '../Slider';

export const Homes = () => (
  <section className="homes">
    <Container>
      <div className="homes__container-item">
        <Subtitle />
        <Slider />
      </div>
    </Container>
  </section>
);
