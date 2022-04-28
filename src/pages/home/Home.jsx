import React from 'react';

import { Navbar, Header, Featured, PropertyList, FeaturedProperties } from '../../components';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Header/>
      <div className="home__container">
        <Featured/>
        <h1 classname="home__title">Browse by property type</h1>
        <PropertyList/>
        <h1 classname="home__title">Home guests love</h1>
        <FeaturedProperties/>
      </div>
    </div>
  )
}

export default Home