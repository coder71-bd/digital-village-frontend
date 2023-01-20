import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { ImLab } from 'react-icons/im';
import { MdOutlineMedicalServices } from 'react-icons/md';

const features = [
  {
    icon: <MdOutlineMedicalServices size={40} />,
    title: 'Qualified Doctors',
    desc: 'preventive care and checkups, to immunizations and exams',
  },
  {
    icon: <AiOutlineClockCircle size={40} />,
    title: '24 Hours Service',
    desc: 'preventive care and checkups, to immunizations and exams',
  },
  {
    icon: <BiBookAdd size={40} />,
    title: 'Emergency',
    desc: 'preventive care and checkups, to immunizations and exams',
  },
  {
    icon: <ImLab size={40} />,
    title: 'Lab Test',
    desc: 'preventive care and checkups, to immunizations and exams',
  },
];

const Features = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center px-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            class=" p-5 flex flex-col justify-center items-center mx-0 md:mx-4  shadow-lg border-2 rounded-md bg-primary text-center md:text-justify text-white"
          >
            {feature.icon}
            <h5 className=" my-4 font-bold">{feature.title}</h5>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
