import React from 'react';

export default function DegreeBlock() {
  return (
    <div className="degree-block">
      <div className="degree-ico">º</div>
      <div onClick={[]} className="celsius active">
        C
      </div>
      <div onClick={[]} className="fahrenheit">
        F
      </div>
    </div>
  );
}
