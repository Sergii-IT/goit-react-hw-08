import css from './ErrorMessage.module.css';

export function ErrorMessage({ message }) {
  return <p className={css.error}>{message}</p>;
}
