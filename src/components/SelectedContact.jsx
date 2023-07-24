
import React, { useState, useEffect } from 'react';

// const SelectedContact = ({ selectedContact }) => {
//   if (!selectedContact) {
//     // If no contact is selected, display a message or placeholder content
//     return <div>Please select a contact.</div>;
//   }

//   return (
//     <div>
//       <h2>Contact Details</h2>
//       <p>Name: {selectedContact.name}</p>
//       <p>Email: {selectedContact.email}</p>
//       <p>Phone: {selectedContact.phone}</p>
//     </div>
//   );
// };

// export default SelectedContact;
//Above code from tab 4


export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId !== null) {
      const fetchSelectedContact = async () => {
        try {
          const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
          const data = await response.json();
          setContact(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchSelectedContact();
    }
    //else {
    //   setContact(null); you can use this else statment and leave the [] empty or use the[] asseeb
    // }
  }, [selectedContactId]);

  console.log("Selected Contact Data:", contact);

  const GoBack = () => {
    //this sets selectectContactId to null thereby re-rendering the page to contact list
    setSelectedContactId(null);
  };

  if (!contact) {
    return <div>No contact selected.</div>;
  } //very important to check if theres a contact otherwise your code will have errors.

  return (
    //     <div>
    //        <h2>Contact Details</h2>
    // //       <p>Name: {selectedContactId.name}</p>
    // //       <p>Email: {selectedContactId.email}</p>
    // //       <p>Phone: {selectedContactId.phone}</p>
    //       <button onClick={handleGoBack}>Go Back</button>
    //     </div>

    <div className="selected-contact">
      <table>
        <thead>
          <tr>
            <th colSpan="2">Contact Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{contact.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{contact.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{contact.phone}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</td>
          </tr>
          <tr>
            <td>Company:</td>
            <td>{contact.company.name}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>{contact.website}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <button onClick={GoBack}>Go Back</button>
    </div>
  );


}