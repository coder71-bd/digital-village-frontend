import React, { useEffect, useState } from 'react';
import development from '../../../../assets/features/development.png';
import education from '../../../../assets/features/education.png';
import market from '../../../../assets/features/market.png';
import medical from '../../../../assets/features/medical.png';
import FeatureCard from './FeatureCard/FeatureCard';

const features = [
  {
    _id: 1,
    name: 'Quality Education',
    img: education,
    currentActive: 0,
  },
  {
    _id: 2,
    name: 'Sustainable Development',
    img: development,
    currentActive: 1,
  },
  {
    _id: 3,
    name: 'Necessary Commodities',
    img: market,
    currentActive: 2,
  },
  {
    _id: 4,
    name: 'Medical Facilities',
    img: medical,
    currentActive: 3,
  },
];

const Features = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (active === 4) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    }, 1500);
  }, [active]);

  return (
    <div className="grid grid-cols-2 place-items-center md:flex md:justify-start md:items-center text-center gap-6 lg:mt-20 md:ml-20 mx-3 text-black">
      {features.map((feature) => (
        <FeatureCard key={feature._id} feature={feature} active={active} />
      ))}
    </div>
  );
};

export default Features;
