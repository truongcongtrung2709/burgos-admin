import React from 'react'
import Header from './header';
import Footer from './footer';
import { SideMenu } from './sideMenu';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({children} : Props) => {

  return (
    <div className='flex flex-col h-screen justify-between'>
      <SideMenu/>
      <div className="md:ml-[200px] ml-0">
      <Header/>
      {children}
      </div>
      <div className="md:ml-[200px] m-0">
      <Footer/>
      </div>
    </div>
  )
}

export default MainLayout