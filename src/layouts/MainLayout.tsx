import React from 'react' 
import Header from 'whichui/components/Header';

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
      <footer>footer</footer>
    </>
  )
}

export default MainLayout