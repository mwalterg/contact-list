import React from 'react';

const SelectedContact = ({ selectedContact }) => {
  if (!selectedContact) {
    // If no contact is selected, display a message or placeholder content
    return <div>Please select a contact.</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
    </div>
  );
};

export default SelectedContact;
