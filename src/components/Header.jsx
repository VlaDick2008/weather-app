import React from 'react';

import DegreeBlock from './DegreeBlock';
import SityBlock from './SityBlock';

import '../scss/style.scss';

export default function Header() {
  return (
    <header>
      <SityBlock />
      <DegreeBlock />
    </header>
  );
}
