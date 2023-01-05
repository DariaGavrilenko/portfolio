import React from 'react';
import './App.css';

import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contacts } from './components/Contacts';
import { RemoteWork } from './components/RemoteWork';
import { MyProjects } from './components/MyProjects';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <MyProjects />
      <RemoteWork />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
