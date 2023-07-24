import './App.css';
import { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    <h1> Group 10 Contact List</h1>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
