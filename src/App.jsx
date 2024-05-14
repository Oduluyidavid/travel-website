import React from 'react'
import { Navbar, Hero, Footer, Memory, Explore, Advertise } from './components';
import {  hero, memory, navlinks, placesAPI, brands } from './data/travigodata';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
      <Advertise brands={brands}/>
      <Footer/> 

    </>
  );
};

export default App