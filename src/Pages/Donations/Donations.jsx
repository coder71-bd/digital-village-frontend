import React from 'react';
import AllCauses from './AllCauses/AllCauses';
import TeamVolunteer from './DonateItems/TeamVolunteer';
import DonationAbout from './DonationAbout/DonationAbout';
import DonationBanner from './DonationBanner/DonationBanner';
import AllEvents from './Events/AllEvents';

const Donations = () => {
  return (
    <>
      <DonationBanner />
      <AllCauses />
      <DonationAbout />
      <TeamVolunteer />
      <AllEvents/>
    </>
  );
};

export default Donations;
