import { Outlet } from 'react-router-dom';
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}