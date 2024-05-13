import React from 'react'
import { Navbar, Hero, Footer, Memory, Explore } from './components';
import { hero, memory, navlinks, placesAPI } from './data/travigodata';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
      <Footer/> 

    </>
  );
};

export default App