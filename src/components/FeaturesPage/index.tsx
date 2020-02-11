import React from 'react';
import Counter from '../Counter/Counter';
import StarHeroes from '../StarHeroes/StarHeroes';
import StarShips from '../StarShips/StarShips';
import Planets from '../Planets/Planets';

export default function FeaturesPage() {
  return (
    <div>
      <Counter />
      <StarHeroes />
      <StarShips />
      <Planets />
    </div>
  );
}
