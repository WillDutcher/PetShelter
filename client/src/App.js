import React, { useEffect } from 'react';
import { Link, Router, Redirect } from '@reach/router';
import PageNotFound from './views/PageNotFound';
import AllPets from './views/AllPets';
import SinglePet from './views/SinglePet';
import UpdatePet from './views/UpdatePet';
import CreatePet from './views/CreatePet';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="app-container">
      <Router>
        <Redirect from='/pets' to='/' noThrow='true' />
        <AllPets path='/' />
        <CreatePet path='/pets/new' />
        <SinglePet path='/pets/:id' />
        <UpdatePet path='/pets/:id/edit' />
        <PageNotFound default />
      </Router>
    </div>
  );
}

export default App;
