import React, { useState } from 'react';

import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contacts } from './components/Contacts';
import { MyProjects } from './components/MyProjects';
import { ModalWindow } from './components/Modal';




function App() {
  const [showModal, setShowModal] = useState(true) 
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <MyProjects />
      <Contacts setShowModal={setShowModal} /> 
      <Footer />
      <ModalWindow setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
}

export default App;
