import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export function Contact({ contact }) {
  const dispatch = useDispatch();

   return (
    <li className={css.listItem}>
      {contact.name}: {contact.phone}
      <button
        type="button"
        className={css.deleteButton}
        onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
    </li>
  );
}

