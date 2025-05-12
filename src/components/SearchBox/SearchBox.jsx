import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

import css from './SearchBox.module.css';

export function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = event => {
    dispatch(setNameFilter(event.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={css.input}
        />
      </label>
    </div>
  );
}
