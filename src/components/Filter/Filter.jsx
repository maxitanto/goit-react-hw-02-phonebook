import React from 'react';

export const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);
