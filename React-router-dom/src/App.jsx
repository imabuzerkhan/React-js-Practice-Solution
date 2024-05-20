import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <>
<Header/>
<Outlet></Outlet>
<Footer></Footer>
   </>
  );
}

export default App;
