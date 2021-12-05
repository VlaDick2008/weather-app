import React from 'react';

export default function DegreeBlock({ updateDegreeIndex, items }) {
  const degreeRef = React.useRef();
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    updateDegreeIndex(index);
  };

  return (
    <ul ref={degreeRef} className="degree-block">
      <li className="degree-ico">º</li>

      {items.map((degree, index) => (
        <li
          onClick={() => onSelectItem(index)}
          className={activeItem === index ? 'degree-type active' : 'degree-type'}
          key={`${degree.type}_${index}`}>
          {degree}
        </li>
      ))}
    </ul>
  );
}
