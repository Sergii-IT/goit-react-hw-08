import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = state => state.contacts.items;
export const selectNameFilter = state => state.filters.name;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
