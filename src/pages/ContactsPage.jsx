import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';

export const ContactsPage = () => {
  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
};