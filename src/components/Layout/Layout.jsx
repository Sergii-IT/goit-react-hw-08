import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import css from './Layout.module.css';

export function Layout() {
  return (
    <>
      <AppBar />
      <main className={css.container}>
        <Outlet />
      </main>
    </>
  );
}

