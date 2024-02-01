// App.js
import React from 'react';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Sale from './components/Sale';
import MedalBrands from './components/MedalBrands';
import GrandBrands from './components/GrandBrands';
import Categories from './components/Categories'
import Footer from './components/Footer'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Sale />
      <h1 className="ml-8 py-10 sm:text-xl text-3xl font-bold tracking-widest">MEDAL WORTHY BRANDS TO BAG</h1>
        <MedalBrands/>
      <div className="">
        <h1 className="ml-8 py-10 text-3xl font-bold tracking-widest">GRAND GLOBAL BRANDS</h1>
        <GrandBrands/>
      </div>
      <div className="">
        <h1 className="ml-8 py-10 text-3xl font-bold tracking-widest">SHOP BY CATEGORY</h1>
        <Categories/>
      </div>
      <Footer/>
      
    </Fragment>
  );
}

export default App;
