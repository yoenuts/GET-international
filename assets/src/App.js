import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Academics from './pages/academics';
import Contact from './pages/contact';
import Administration from './pages/administration';
import VicePresident from './pages/vicepresident';
import President from './pages/president';
import Research from './pages/research';
import VMC from './pages/vmc';
import Background from './pages/background';
import Footer from './components/Footer';
import Archives from './pages/archives';
import MemberForm from './components/MemberForm';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route  path='/' element={<Home />}></Route>
        <Route  path='/about' element={<About />}></Route>
        <Route  path='/contact' element={<Contact />}></Route>
        <Route  path='/academics' element={<Academics />}></Route>
        <Route  path='/about/background' element={<Background />}></Route>
        <Route  path='/about/vmc' element={<VMC />}></Route>
        <Route  path='/research' element={<Research />}></Route>
        <Route  path='/research/archives' element={<Archives />}></Route>
        <Route  path='/administration' element={<Administration />}></Route>
        <Route  path='/administration/president' element={<President />}></Route>
        <Route  path='/administration/vicepresident' element={<VicePresident />}></Route>
        <Route  path='/archives/memberForm' element={<MemberForm />}></Route>
      </Routes>
      <Footer />
    </div>
  );
  
}

export default App;
