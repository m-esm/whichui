import React from 'react' 
import Header from 'whichui/components/Header';
import Footer from 'whichui/components/Footer'
interface IMainLayoutProps {
  children: React.ReactNode;
}


const MainLayout = (props: IMainLayoutProps) => {
  const {
    children
  } = props; 


  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer /> 
    </>
  )
}

export default MainLayout