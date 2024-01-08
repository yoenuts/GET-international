import { Routes, Route } from 'react-router-dom';
import React from 'react';

import './App.css';
import NavBar from './components/Navbar';
import VerifyForm from './components/VerifyForm';
import EditForm from './components/editForm';
import Home from './pages/home';
import About from './pages/about';
import Academics from './pages/academics';
import Contact from './pages/contact';
import Administration from './pages/administration';
import VMC from './pages/vmc';
import Background from './pages/background';
import Footer from './components/Footer';
import Research from './pages/research';
import MemberForm from './components/MemberForm';
import UserPage from './pages/userDashboard';
import ArchiveInfo from './components/archiveInfo';
import ArticleInfo from './components/articleInfo';
import AboutJournal from './components/aboutJournal';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/background' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='about/vmc' element={<VMC />} />
        <Route path='/research/:section' element={<Research />} />
        <Route path='/research/aboutJournal/:page' element={<AboutJournal />} />
        <Route path='/archives/:issue' element={<ArchiveInfo />} />
        <Route path='/research/archives/:issue/:title' element={<ArticleInfo />} />
        <Route path='/administration/:admin' element={<Administration />} />
        <Route path='/memberForm' element={<MemberForm />} />
        <Route path='/dashboard' element={<UserPage />} />
        <Route path='/verifyAccount' element={<VerifyForm />} />
        <Route path='/editForm' element={<EditForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
