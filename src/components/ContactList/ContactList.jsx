import React from 'react';

export const ContactList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
