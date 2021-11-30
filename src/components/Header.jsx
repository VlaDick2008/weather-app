import React from 'react';

import DegreeBlock from './DegreeBlock';
import SityBlock from './SityBlock';

import '../scss/style.scss';

export default function Header({ sity, aaa }) {
  const sitsy = sity;
  const aaaa = aaa;
  return (
    <header>
      <SityBlock sity={sitsy} aaa={aaaa} />
      <DegreeBlock items={['C', 'F']} />
    </header>
  );
}
