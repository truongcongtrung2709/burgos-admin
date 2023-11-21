import React from 'react'
import Header from './header';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({children} : Props) => {

  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}

export default MainLayout