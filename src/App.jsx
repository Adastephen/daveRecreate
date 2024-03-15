import React from 'react';
import { 
  Header0, 
  Header1
} from "../src/component/major/header/index.js";
import {
  Hero, 
  Hero1
} from "../src/component/major/hero/index.js";


function App() {

  return (
    <>
      <div className="h-screen">
        <Header0 />
        <Header1 />
        <Hero />
        <Hero1 />
      </div>
    </>
  )
}

export default App;
