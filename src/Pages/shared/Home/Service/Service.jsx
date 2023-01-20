import React, { useState } from 'react';
import {
  FcCalendar,
  FcDonate,
  FcGraduationCap,
  FcHome,
  FcShop,
} from 'react-icons/fc';
import { MdLocalHospital } from 'react-icons/md';
import development from './../../../../assets/services/development.png';
import donate from './../../../../assets/services/donate.png';
import education from './../../../../assets/services/education.png';
import event from './../../../../assets/services/event.png';
import medical from './../../../../assets/services/medical.png';
import ServiceBoard from './ServiceBoard/ServiceBoard';
import ServiceExplore from './ServiceExplore/ServiceExplore';

const services = [
  {
    icon: <FcGraduationCap className="text-center" size={70} />,
    name: 'Digital Learning',
    image: education,
    detail:
      'Digital Learning is a service provided by us to improve the literacy rate of our village. We offers full free and quality education.',
    desc: 'Free and Quality education',
    controlData: 'education',
  },
  {
    icon: <MdLocalHospital className="text-center" size={70} />,
    name: 'Medical',
    image: medical,
    detail:
      'Medical services means Medically Necessary services, including, as the context requires, Confinement, treatments, procedures, tests, examinations .',
    desc: 'Low cost Medical Services',
    controlData: 'medical',
  },
  {
    icon: <FcCalendar className="text-center" size={70} />,
    name: 'Events',
    image: event,
    detail:
      'Check out some amazing free events in village to take away all the fun experiences. There can be a lot that  might be offering but all the events  make it unique, distinctive and different from others.',
    desc: 'Exclusive events, Knowledge Sharing',
    controlData: 'events',
  },
  {
    icon: <FcDonate className="text-center" size={70} />,
    name: 'Donations',
    image: donate,
    detail:
      ' Donation is a gift for charity, humanitarian aid, or to benefit a cause. A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles. ',
    desc: 'Donation for needy people',
    controlData: 'donation',
  },
  {
    icon: <FcHome className="text-center" size={70} />,
    name: 'Development',
    image: development,
    detail:
      'Our proud team working hard for the poor village people and improve their life style.we take somme village development work to develop various area ',
    desc: 'Propose your development idea',
    controlData: 'development',
  },
  {
    icon: <FcShop className="text-center" size={70} />,
    name: 'E-Market',
    image:
      'https://weirdguru.com/wp-content/uploads/2020/12/custom-ecommerce-website-development-vector-image.png',
    detail:
      'E-Market  is a nice platform for buying daily necessities.The main objective  is to connect the rural people with e-commerce and gaining their trust.',
    desc: 'We make online selling superbly easy',
    controlData: 'e-market',
  },
];

const Service = () => {
  const [control, setControl] = useState('education');

  return (
    <div className="space-y-6">
      <div className="md:pt-[50px] mx-1">
        <p className="text-center text-2xl text-blue-600 font-bolder">
          Services
        </p>
        <h1 className=" text-xl md:text-2xl  text-center font-bold py-2   text-primary">
          Our valuable Services for village people
        </h1>
        <p className="hidden md:block px-10 md:px-[100px] text-justify md:text-center">
          Serving people is our goal to achieve sustainable development for this
          village
        </p>
      </div>
      <section
        id="service"
        className="space-y-6 md:space-y-0 flex flex-wrap mt-10"
      >
        <div className="w-full lg:w-1/2 space-y-3 md:space-y-6 text-center md:text-left">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {services.map((service) => (
              <ServiceBoard
                key={service.name}
                setControl={setControl}
                control={control}
                service={service}
              ></ServiceBoard>
            ))}
          </div>
        </div>

        {services.map(
          (service) =>
            control === service.controlData && (
              <ServiceExplore key={service.name} service={service} />
            )
        )}
      </section>
    </div>
  );
};

export default Service;
