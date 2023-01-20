import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Services from './Services/Services';

const MedicalHome = () => {
  return (
    <div className="space-y-20 mb-4">
      <Banner />
      <Features />
      <Services />
    </div>
  );
};

export default MedicalHome;
