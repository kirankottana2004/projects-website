import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import WhatYouGet from './components/WhatYouGet';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import ScrollToTop from './components/ScrollToTop';

// Project Overview Pages
import MBAp from './pages/mba/MBAp'; 
import MCAp from './pages/mca/MCAp'; 
import BTechp from './pages/btech/BTECHp'; 

// mca Project Detail Pages
import Webdevelopment from './pages/mca/Webdevelopment';
import Datascience from './pages/mca/Datascience';
import Mobileappdevelopment from './pages/mca/Mobileappdevelopment';
import DevopsDeployment from './pages/mca/DevopsDeployment';
import Cloudtech from './pages/mca/Cloudtech';
import Database from './pages/mca/Database';

// btech Project Detail Pages
import AIandMLandDatascience from './pages/btech/AIandMLandDatascience';
import CloudandDevops from './pages/btech/CloudandDevops';
import Softwaretools from './pages/btech/Softwaretools';
import Cybersecurity from './pages/btech/Cybersecurity';
import Databases from './pages/btech/Databases';
import Electronics from './pages/btech/Electronics';
import AppDevelopment from './pages/btech/AppDevelopment';
import WebDevelopment from './pages/btech/WebDevelopment';

// mba Project Detail Pages

import HRM from './pages/mba/HRM';
import Marketing from './pages/mba/Marketing';
import Finance from './pages/mba/Finance';

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar onRegisterClick={() => {
        if (window.location.pathname !== "/") {
          window.history.pushState(null, "", "/");
          setTimeout(openRegisterModal, 150); 
        } else {
          openRegisterModal();
        }
      }} />

      {/* RegisterModal should be outside Routes so it's global */}
      <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero onRegisterClick={openRegisterModal} />
              <Services />
              <About />
              <WhatYouGet />
              <Contact />
              <Footer />
              <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
            </>
          }
        />

        {/* Project Overview Pages */}
        <Route path="/projects/mba" element={<MBAp />} />
        <Route path="/projects/mca" element={<MCAp />} />
        <Route path="/projects/btech" element={<BTechp />} />

        {/*mca Project Detail Pages */}
        <Route path="/projects/mca/Webdevelopment" element={<Webdevelopment />} />
        <Route path="/projects/mca/Datascience" element={<Datascience />} />
        <Route path="/projects/mca/Database" element={<Database />} />
        <Route path="/projects/mca/Mobileappdevelopment" element={<Mobileappdevelopment />} />
        <Route path="/projects/mca/Cloudtech" element={<Cloudtech />} />
        <Route path="/projects/mca/DevopsDeployment" element={<DevopsDeployment />} />

        {/* btech Project Detail Pages */}
        <Route path="/projects/btech/AIandMLandDatascience" element={<AIandMLandDatascience/>} />
        <Route path="/projects/btech/CloudandDevops" element={<CloudandDevops/>} />
        <Route path="/projects/btech/Cybersecurity" element={<Cybersecurity/>} />
        <Route path="/projects/btech/Databases" element={<Databases/>} />
        <Route path="/projects/btech/Electronics" element={<Electronics/>} />
        <Route path="/projects/btech/AppDevelopment" element={<AppDevelopment/>} />
        <Route path="/projects/btech/Softwaretools" element={<Softwaretools/>} />
        <Route path="/projects/btech/WebDevelopment" element={<WebDevelopment/>} />

        {/* mba Project Detail Pages */}
        <Route path="/projects/mba/HRM" element={<HRM />} />
        <Route path="/projects/mba/Marketing" element={<Marketing />} />
        <Route path="/projects/mba/Finance" element={<Finance />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
